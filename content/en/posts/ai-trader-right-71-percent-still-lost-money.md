---
title: "The AI Trader Was Right 71% of the Time. It Still Lost Money"
seoTitle: "Are AI Trading Bots Profitable in 2026?"
date: 2026-09-13
slug: "ai-trader-right-71-percent-still-lost-money"
featuredImage: "/uploads/hero-ai-trading-bot-lost-money-2026.png"
images: ["/uploads/hero-ai-trading-bot-lost-money-2026.png", "/uploads/ai-trading-champion-delivery-robot-2026.png", "/uploads/ai-trading-competition-everyone-wins-2026.png", "/uploads/ai-trading-system-formula-team-2026.png"]
translationKey: "ai-trader-right-71-percent-still-lost-money"
draft: false
tags: ["AI trading", "AI agents", "algorithmic trading", "investing", "financial markets"]
categories: ["AI and Finance"]
author: "Denys Voroshylov"
description: "AI models are trading real money, winning paper-trading contests, and still failing to prove a durable edge. I examine the evidence from 2026."
---

*Since my first review, AI models have traded real money, beaten market indexes, suffered serious losses—and given us a much stranger answer to the question of whether machines can trade.*

On January 12, 2026, six leading AI models received $10,000 each and entered the prediction markets. They could search the web, read contract rules, compare prices, calculate position sizes, and place trades without human approval. This was no longer the familiar demonstration in which a model explains why it likes a particular stock. According to the researchers, the money was real, the prices were live, and there were real market participants on the other side of every trade.

Fifty-seven days later, all six accounts on Kalshi were in the red. The best model lost 16%. The worst lost more than 30%. Results on Polymarket were considerably better, but the group still failed to make money on average. The most interesting detail involved Grok: it correctly predicted the outcome of 71.4% of the contracts it held to settlement—and still lost money.

At almost the same time, a different public experiment showed a virtual ChatGPT portfolio up more than 70%. Several other models were beating market indexes, while users were already connecting real brokerage accounts to portfolios assembled with AI. The picture looked strange. In one place, the smartest models in the world were losing together. In another, they were making more in a few months than a good portfolio manager might hope to earn in several years.

Both pictures could be true.

That is why the question “Can AI trade?” turned out to be far too crude.

> **A model can predict events correctly and lose money. It can make a lot of money and still have no trading skill.**

It can also be a useful part of a profitable system without being the main source of that profit.

In May, I wrote that AI had already learned to talk to the market but had not proved that it could understand it. In the months since, it has not become an oracle. But we finally have experiments that let us see what happens between a model’s elegant answer and the real money in an account.

## From conversation to consequences

In my first article on AI trading, I was mainly interested in the change in the interface. There used to be a small obstacle course between the thought “Maybe I should buy this stock” and the purchase itself. You had to open a chart, find the news, check your portfolio, calculate a position size, choose an order type, and perhaps ask yourself one more time whether you were doing something foolish. Now all of that is gradually being compressed into a single conversation with software.

That was a real change. But most trading AI was still living in the role of assistant: explaining, searching, comparing, and suggesting. Even when a platform allowed a model to prepare a trade, the final decision usually remained with a person. There was almost no evidence that an ordinary language model could grow capital independently and consistently.

Now the missing experiments are beginning to appear. Models have been given live data, portfolios, rules, and the authority to make a sequence of decisions. Researchers have started examining not only total returns but where those returns came from: good stock selection, a rising market, a bet on one fashionable sector, or simple luck. They have begun accounting for commissions, trading frequency, position sizes, and drawdowns. Some studies deliberately hid company names and dates to test whether the AI was reasoning or merely recognizing a story it had seen before.

The progress is real, but most of it has happened in the quality of the testing. We still do not have a convincing autonomous portfolio manager. What we do have is a much clearer view of why impressive demonstrations so often fall apart when they meet the market.

That is more useful than another promise of getting rich while you sleep.

## Four different kinds of “profit”

When a headline says that an AI made 80%, that number can describe several entirely different things.

The first is a historical backtest. A model receives old data, pretends it is living in the past, and chooses trades. This is convenient: no one has to wait months for the result. But the language model may have encountered the same events during training, and the test itself may quietly use information from the future. In this kind of experiment, the student sometimes solves the problem not because they understand the subject, but because they have already seen the page with the answers.

The second is paper trading in the live market. The model makes decisions in advance, so it can no longer peek into the future. But a real order may execute at a worse price than a virtual one: the price moves, the required volume is unavailable, and commissions slowly eat into the result. A paper portfolio politely buys everything at the quoted price. The market is not so well-mannered.

The third is real-money trading reported by the organizer. This is more serious, but questions remain. Can we see the complete list of trades? Were all costs included? Do we know the maximum drawdown? Did the organizers change the model’s instructions during the experiment? Were we shown one attractive winner out of twenty failures?

Finally, there is the strictest level: a real account, a complete trading log, all costs, a suitable benchmark, risk metrics, and an independent way to verify everything. Among the 2026 experiments we examined, no positive result has yet made it all the way through this test. That does not mean nobody earned money. It means the public evidence is not sufficient to separate skill from the market, risk, and luck with confidence.

![A robot decorated with best AI trader awards returns home after a food-delivery shift](/uploads/ai-trading-champion-delivery-robot-2026.png)
*A trophy for high returns in a virtual portfolio still does not pay real-world bills.*

> **The distinction sounds boring while it concerns someone else’s spreadsheet. It stops being boring the moment your bank card is connected to it.**

## How to be right and still lose

Prediction Arena is especially valuable because it ended badly and the researchers did not hide the result. From January 12 to March 9, six models placed 2,916 trades on Kalshi. They could see bid and ask prices, contract rules, and the state of their portfolios, and they could search for additional information. Borrowed money was not allowed, and no more than 15% of the capital could be placed on a single event. The system accounted for fees and checked whether an agent had enough funds for each transaction.

Put simply, the models were not allowed to walk into a casino and put everything on red. They were given perfectly reasonable guardrails. And they still lost.

On Kalshi, the six accounts lost between 16% and 30.8%. On Polymarket, the same models lost only 1.1% on average. The difference between the two platforms matters in itself: performance depended not only on the model’s “intelligence,” but also on market structure, available contracts, liquidity, and the way opportunities were found. The same driver performed much worse on a different track.

But the central lesson was hidden in Grok’s result. If the model correctly identified 71.4% of the outcomes, why did its account fail to grow? Because markets do not pay for being right in the abstract. They pay for being right about something that other participants have not already priced in.

Imagine a contract that pays one dollar if an event occurs. If the market is already selling it for 95 cents and the model estimates the probability at 96%, the forecast may be highly accurate. But the potential profit is tiny, while one mistake can erase the gains from several correct bets. Add an oversized losing position, an early exit, and the spread between buying and selling prices, and high accuracy can coexist quite comfortably with a loss.

In everyday life, we treat a correct answer as a victory. In trading, a correct answer is only raw material. You still have to buy it at the right price, size it correctly, and sell it at the right time. The models gathered information well and could explain their decisions convincingly, but they were poor at converting probability into capital.

The confident reasoning looks especially uncomfortable next to a red account balance. A person sees a careful explanation, citations, and a calm tone and can almost physically feel that the decision has been checked. But articulate language does not reduce a position, close a loss, or refund a commission.

> **Artificial intelligence does not remove risk. It can make risk look remarkably well educated.**

## How to make money and still prove nothing

Now consider the opposite picture. In the Rallies paper-trading competition, ChatGPT’s portfolio had grown from roughly $100,000 to $159,000 in a snapshot published in June, while the broad US market index gained about 8%. Later reports put the gain above 70%. For a headline, this is nearly perfect material: the machine crushed the market.

Except that much of the return was tied to a handful of companies serving the AI boom. Credo Technology and Nebius nearly doubled in the portfolio, and other technology companies also carried substantial weight. The model caught a powerful theme and made good money from it. That is a result. It is not yet proof of universal skill.

If someone put nearly everything into chipmakers at the beginning of a strong year, we can congratulate them on the profit. Before calling them an exceptional investor, we would want to see what happens when the technology sector stalls, interest rates change, and the market suddenly falls in love with an entirely different set of companies. One tailwind does not make a sailor a captain.

This is exactly the problem researchers tried to unpack in KTD-Fin. Ten language models traded stocks from China’s CSI 300 index. On the surface, some results looked spectacular: the best models earned returns in the tens of percent, and several comfortably beat the index. But the researchers did not stop at the final number. They broke the returns into their component parts.

It turned out that the models often made money because the overall market was rising and because they repeatedly leaned toward familiar company sizes, investment styles, or price trends. Once the researchers separated these factors from the ability to select individual stocks, nine of the ten models had negative stock-selection results. The sole exception came close to zero but showed no convincing edge.

This is one of the most important findings in the entire study. Holding plenty of risky stocks in a rising market—or simply landing in a sector during a boom—can be enough.

> **A portfolio can grow even when its creator cannot identify the best companies. The profit exists, the money in the account is real, and the evidence of skill is still missing.**

![A crowd of robots fills an enormous first-place podium at an AI trading competition while second and third place remain empty](/uploads/ai-trading-competition-everyone-wins-2026.png)
*When almost everyone is a winner, it is worth asking whether a rising market did the real work.*

A study from the US National Bureau of Economic Research found a similar effect. Models selected American stocks in advance each day and, at one point, were beating the index. Yet they kept reaching for the same kind of companies: large, expensive, fast-growing technology names that received heavy media coverage. The portfolios were highly sensitive to broad market movements, and chipmakers accounted for an enormous share of recommendations. Once the models were compared with similar companies, the unusual returns nearly disappeared.

Language models are exceptionally good at sensing the public story of the market. They read what we read, only at a vastly greater scale. If everyone is talking about data centers, semiconductors, and energy for AI, the models quickly assemble those signals into a coherent investment narrative. Sometimes that narrative makes money. But a familiar story and a hidden undervaluation are not the same thing.

## The model that remembers the future

Historical tests create an even stranger problem. We ask a modern model to travel back in its imagination to, say, 2021, show it old data, and tell it: “Pretend you do not know what happened next.” But a model cannot honestly forget on command. During training, it may have read news about the company’s later growth, post-crisis analysis, price tables, and articles written after the event.

This does not necessarily look like outright cheating. The model may never name a future price or even realize that it recognizes the story. The company name simply triggers a cloud of associations: powerful brand, industry winner, successful CEO, promising technology. A neutral news item then quietly receives a more optimistic interpretation.

That is why the authors of KTD-Fin hid company names, ticker symbols, industries, and calendar dates. Other researchers made the test even more vivid: they turned Apple or Tesla into an anonymous “Stock 0026” and watched to see whether decision quality survived. When the famous name disappeared, some of the model’s confidence disappeared with it.

In “The Alpha Illusion,” researchers assembled evidence that trading agents perform substantially worse once they move beyond the boundary of data available during the model’s training. One system’s total return fell by roughly 72% when it stopped trading in the familiar past and entered a genuinely unknown period. This does not prove that every earlier study was meaningless. But it changes how we should view charts in which AI appears to move flawlessly through twenty years of financial history.

> **Perhaps it did not see the future. Perhaps it simply remembered the past too well.**

## Why the champions keep changing

If one model possessed general trading intelligence, we would expect to find it near the top in different competitions. Reality looks different. Across a series of TradeRank paper-trading tournaments, the winners changed with the market—sometimes in almost comic fashion.

In one season, the cryptocurrency market rose and every model lost. In another, eight of nine agents made money in a falling market because they chose the right direction and a few coins moved sharply. In the following season, nine of ten models simultaneously took short positions and looked extremely clever while the market was actually falling. When price action turned sideways, the former champion Gemini slid from plus 13.76% to negative 0.35%, while the new winner, Kimi, earned just 2.14%.

The sequence matters more than any position on the leaderboard. Models tend to repeat familiar behavioral patterns: buying after a drop, clinging to a trend, reversing direction too often after a sharp daily move, and repeatedly re-entering losing positions. When a habit matches the current market regime, the agent looks perceptive. When the market changes, yesterday’s insight becomes today’s commission.

The same instability is visible in a year-long Chinese experiment tracked by a city newspaper. DeepSeek surged ahead at first. A few weeks later, every participant was trailing the index. By the end of February, Qwen was in the lead, and in March the ranking changed again. The experiment is still running, so naming a winner now would be about as sensible as declaring the champion of a football season after the third match.

This does not mean there are no differences between models. Some trade more often, others are more cautious, and some extract facts from documents more effectively. But we have no stable scale on which the “smartest” model automatically becomes the best trader. The result depends on the market, the period, the prompt, the available tools, the constraints, and even the version of the model that the organizer connected on a particular day.

> **Model rankings still tell us far more about the experiment than they do about the models.**

## Where AI has actually proved useful

After all of this, it is tempting to shrug: another technology that writes excellent reports and makes poor investments. But that would be the same kind of mistake as treating every profitable portfolio as proof of machine genius. AI produced measurable value in several experiments. It simply did so in systems where it was not handed the entire control panel.

BlindTrade is a good example. To prevent the models from recognizing companies, the researchers hid their names. Four specialized agents separately analyzed price movements, news, the possibility of prices reverting toward their average, and the state of the market. Their reasoning was passed to a graph model that searched for relationships between companies, while a separate reinforcement-learning algorithm determined the final portfolio weights.

The result was not an electronic brain that wakes up in the morning and decides what to buy. It was more like a small investment factory: language models convert unstructured news and data into signals, mathematical methods test the relationships, and a separate mechanism builds the portfolio while accounting for the cost of frequent trading. Crucially, the language model does not determine the final trade. The system achieved a Sharpe ratio of 1.40—a respectable balance of return and risk. Without the language-model signals, that figure fell to 1.14. The models clearly added value, but they did not create the outcome alone.

The positive result came at a price. Maximum drawdown reached 31.66%, compared with 19% for a fund tracking the S&P 500, and the portfolio’s value fluctuated much more sharply. BlindTrade therefore does not prove that researchers have found a safe autonomous money manager. It shows something narrower and more useful: signals processed by a language model can improve a complex trading system, as long as improvement is not confused with full autonomy.

![A robot trader drives a Formula-style race car while a full team of specialists keeps the system running](/uploads/ai-trading-system-formula-team-2026.png)
*The robot may be in the driver’s seat, but the result comes from the whole team: data, strategy, risk control, execution, and the person responsible for the system.*

A study by Spain’s National Securities Market Commission offers a similar lesson. Four models evaluated shares in major Spanish companies each month. With simple conversational prompts, their average market-beating return was close to zero. Performance improved when the models received a clear multifactor instruction. The best results appeared only after several stages of review, the addition of official documents, and human corrections.

Spanish newspapers quickly turned this into a story about AI earning more than 80%. In reality, there was no autonomous brokerage account: the researchers constructed hypothetical portfolios, did not deduct every cost, and observed them for only ten months. But the experiment clearly showed where the value came from. Not from the magical question “What should I buy?” but from a well-organized process of working with data, documents, and repeated checks.

There is real commercial demand as well. University of Florida finance professor Alejandro Lopez-Lira works with the Autopilot platform on several portfolios assembled with help from ChatGPT, DeepSeek, Claude, and other models. According to him, around 52,000 investors have connected approximately $200 million to seven such strategies. Individual portfolios have reported high returns, and trades can be copied automatically into users’ brokerage accounts.

But here, too, adoption must not be confused with proof. The amount of connected capital shows that people are willing to trust these products. It does not confirm that the language model itself created the profit. People define the constraints, decide how often the portfolio changes, and design the process; complete data on costs, risk, and every trade are unavailable; and the strategies began at different times. This is a serious financial product, but it does not settle the scientific question.

The most honest positive conclusion looks less impressive than an advertisement, but it survives scrutiny. Language models can already read news and reports quickly, compare arguments, find unusual connections, formulate hypotheses, and turn a chaotic flow of information into features suitable for further analysis. They can improve a trading system. But the best outcomes appear when they are surrounded by mathematics, constraints, quality control, and a person who can say no.

AI is gradually moving from the role of assistant to that of a component inside the machine. This is an important step. But one component is not the whole engine.

## The next nine months

I do not expect to see a universal AI portfolio manager consistently beating different markets by June 2027. That is a forecast, not an established fact, but today’s evidence points in that direction. Performance remains too dependent on the period, the asset universe, the prompt, and the surrounding system. What we will see is more experiments with real money, longer test periods, and more detailed decision logs.

There will almost certainly be another spectacular winner. Some agent will turn $10,000 into $30,000 or $50,000, and the headlines will dutifully announce that AI has crushed the market. Then we will find familiar machinery underneath: leverage, one enormous bet, a lucky sector, a short time horizon, simulated execution, or one surviving portfolio among a dozen that quietly disappeared. It will not necessarily be fraud. More likely, we will once again see a real result carrying more meaning than it can support.

At the same time, a quieter and more important shift will take place. Successful systems will look even less like a chatbot with a Buy button. They will contain more specialized agents, quantitative models, automated fact-checking, position-size limits, and strict execution rules. The better such an “AI trader” performs, the harder it will become to say how much of the result was created by the language model itself.

Trading platforms will also face an amusing reversal. At first, they used AI to remove friction: shorten the path from impulse to trade, hide the complexity of the interface, and let a person manage an account with an ordinary sentence. Now they will have to put some friction back. Before a large trade, the system should state the maximum acceptable loss, explain the position size, identify the condition that would invalidate the idea, and request approval before exceeding preset limits.

In May, I worried that AI would help people lose money faster. Over the past few months, that has stopped being merely a concern. Autonomous agents have shown how correct forecasts are ruined by price, position size, and execution.

> **The next stage of progress will not be about removing the final obstacles. It will be about creating the right ones.**

The main commercial market will probably not emerge around promises of extraordinary returns either. The money will be in document analysis, risk monitoring, portfolio checks, discrepancy detection, trade preparation, and compliance control. In other words, the steadiest profits may go not to the owner of the magical robot, but to the company selling it a helmet, brakes, and a dashboard.

What would make me change my mind? A public real-money account verified by a broker or exchange; a complete trading log; every commission and execution loss; an appropriate benchmark; a disclosed maximum drawdown; prompts that were not altered after the fact; returns stripped of broad market growth and exposure to popular factors. And above all, not one lucky month, but at least a year of operation across several different market regimes.

The next true breakthrough will not be the portfolio with the biggest return printed beside its name. It will be the portfolio whose performance survives every attempt to explain it through a rising market, higher risk, luck, model memory, or a flattering way of measuring the result.

That system does not exist yet. But at least we now know what we are looking for.

In May, artificial intelligence already knew how to speak confidently to the market. Today it sits at a real control panel, presses buttons, and sometimes even chooses the right direction. But a good trader is not the one who guesses more often which way the road will turn. It is the one who reaches the destination with the car intact.

AI has not reached that turn yet.

---

## Sources

- [The first article: “AI Trading in 2026: Better Assistants, Not Better Oracles”](https://www.aicaver.com/posts/ai-trading-2026-better-assistants-not-better-oracles/)
- [Prediction Arena: evaluating models in real prediction markets](https://arxiv.org/abs/2604.07355)
- [KTD-Fin: evaluating trading agents with masked data and return attribution](https://arxiv.org/abs/2605.28359)
- [BlindTrade: trading with anonymized company names](https://arxiv.org/abs/2603.17692)
- [US National Bureau of Economic Research study](https://www.nber.org/papers/w35153)
- [Spanish National Securities Market Commission study](https://www.cnmv.es/DocPortal/Publicaciones/Boletin/Boletin_I_2026_ES.pdf)
- [TradeRank competition results](https://www.traderank.ai/blog/best-ai-models-for-crypto-trading-2026)
- [Launch of the year-long Chinese AI portfolio experiment](https://mdaily.hangzhou.com.cn/dskb/2026/01/12/article_detail_2_20260112A143.html)
- [Chinese experiment results through February](https://mdaily.hangzhou.com.cn/dskb/2026/03/02/article_detail_2_20260302A144.html)
- [Chinese experiment results through March](https://mdaily.hangzhou.com.cn/dskb/2026/04/01/article_detail_2_20260401A114.html)
- [Published snapshot of the Rallies virtual portfolio](https://finbold.com/chatgpt-portfolio-crushes-stock-market-gains-60/)
- [Later Rallies snapshot showing a 72.4% return](https://cryptobriefing.com/chatgpt-leads-rallies-ai-stock-market-arena/)
- [How Autopilot portfolios work](https://www.joinautopilot.com/landing)
- [Alejandro Lopez-Lira interview on 52,000 investors and $200 million](https://www.ai-street.co/p/how-ai-runs-200-million-in-portfolios)
- [“The Alpha Illusion”: why historical language-model performance does not prove future profitability](https://arxiv.org/abs/2605.16895)
