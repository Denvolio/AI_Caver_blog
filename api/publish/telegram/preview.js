import { handleTelegramRelay } from "../../../../lib/telegram-publisher-relay.js";

export default function handler(req, res) {
  return handleTelegramRelay(req, res, "/api/publish/telegram/preview");
}
