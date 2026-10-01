import { timingSafeEqual } from "node:crypto";

const MAX_BODY_BYTES = 64 * 1024;

function sameSecret(leftValue, rightValue) {
  if (!leftValue || !rightValue) return false;
  const left = Buffer.from(leftValue);
  const right = Buffer.from(rightValue);
  return left.length === right.length && timingSafeEqual(left, right);
}

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  let raw = "";
  for await (const chunk of req) {
    raw += chunk.toString();
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      const error = new Error("request_too_large");
      error.statusCode = 400;
      throw error;
    }
  }

  try {
    return JSON.parse(raw || "{}");
  } catch {
    const error = new Error("invalid_json");
    error.statusCode = 400;
    throw error;
  }
}

export async function handleTelegramRelay(req, res, targetPath) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: "method_not_allowed" });
  }

  const authorization = req.headers.authorization || "";
  const suppliedSecret = authorization.startsWith("Bearer ")
    ? authorization.slice(7).trim()
    : "";

  if (!sameSecret(suppliedSecret, process.env.PUBLISH_WEBHOOK_SECRET)) {
    return json(res, 401, { ok: false, error: "unauthorized" });
  }

  let body;
  try {
    body = await readBody(req);
  } catch (error) {
    return json(res, error.statusCode || 400, {
      ok: false,
      error: error.message || "invalid_request",
    });
  }

  const origin = (process.env.OPENCLAW_ORIGIN || "").replace(/\/$/, "");
  const gatewayToken = process.env.OPENCLAW_GATEWAY_TOKEN;
  const publishSecret = process.env.PUBLISH_WEBHOOK_SECRET;

  if (!origin || !gatewayToken || !publishSecret) {
    return json(res, 500, { ok: false, error: "relay_configuration_missing" });
  }

  let upstream;
  try {
    upstream = await fetch(`${origin}${targetPath}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${gatewayToken}`,
        "X-Publish-Webhook-Secret": publishSecret,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch {
    return json(res, 502, { ok: false, error: "openclaw_unreachable" });
  }

  const contentType = upstream.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json(res, 502, { ok: false, error: "openclaw_invalid_response" });
  }

  const text = await upstream.text();
  let responseBody;
  try {
    responseBody = JSON.parse(text);
  } catch {
    return json(res, 502, { ok: false, error: "openclaw_invalid_response" });
  }

  return json(res, upstream.status, responseBody);
}
