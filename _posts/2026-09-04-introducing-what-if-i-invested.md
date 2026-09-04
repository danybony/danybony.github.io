---
title: "What if I invested? Building a compound interest calculator that answers the question nobody asks out loud"
excerpt: "Why small amounts invested feel pointless — and the site I built to show they aren't."
header:
  teaser: "/assets/images/what-if-i-invested/hero.png"
---

There is a question a lot of people carry around and never say out loud, because saying it out loud feels like an admission: *what would I have today, if I had started investing ten years ago?*

I built [**whatifiinvested.it**](https://whatifiinvested.it){:target="_blank"} to answer exactly that. It is a compound interest calculator, but the headline number is not the one calculators usually show. It is the **gap** — how far ahead of your bank account you would have ended up.

This post is about why that gap is so hard to picture, what the site does about it, where the numbers stop being trustworthy, and how the whole thing is built with no backend at all.

<figure>
	<img src="/assets/images/what-if-i-invested/base_text.png">
</figure>

## Personal finance is a blind spot, and in Italy it is a big one

I am Italian, and this is not a comfortable thing to write. The Bank of Italy runs a survey on financial literacy every three years, harmonised with the OECD's international methodology. In the [2023 edition](https://www.bancaditalia.it/pubblicazioni/indagini-alfabetizzazione/2023-indagini-alfabetizzazione/index.html?com.dotmarketing.htmlpage.language=1){:target="_blank"}, Italian adults scored **10.6 out of 20** — up slightly from 10.2 in 2020, and still low. The [2020 survey](https://www.bancaditalia.it/pubblicazioni/qef/2020-0588/index.html?com.dotmarketing.htmlpage.language=1){:target="_blank"} put Italy below the OECD average outright.

Zoom into the specific concept and it gets sharper. Annamaria Lusardi and Olivia Mitchell's ["Big Three"](https://gflec.org/education/questions-that-indicate-financial-literacy/){:target="_blank"} are three questions on compound interest, inflation and diversification — no arithmetic required, just the concept. In Italy, [the compound interest question is answered correctly by about 40% of people](https://www.unibocconi.it/en/faculty-and-research/research/research-centers/three-questions-measure-financial-literacy){:target="_blank"}, and only a quarter get all three right.

That shows up in behaviour. Consob's [report on the financial investments of Italian households](https://www.consob.it/web/consob-and-its-activities/report-on-investments-households){:target="_blank"} finds low-risk instruments — certificates of deposit, postal savings bonds — in the portfolios of 48% of respondents. And the Bank of Italy's [distributional wealth accounts](https://www.bancaditalia.it/statistiche/tematiche/conti-patrimoniali/conti-distributivi/index.html){:target="_blank"} show that for households in the bottom half of the wealth distribution, more than 90% of assets sit in just two places: the home they live in, and **deposits**.

Money parked in a current account is not a neutral choice. It is a choice with a cost, and the cost compounds too.

## Compound interest does not behave the way your brain expects

Here is the thing nobody tells you: compounding is not slow-then-fast in a gentle way. It is almost *nothing*, for a long time, and then it is most of the outcome.

Take the site's own defaults — €1,000 to start, €200 a month, 7% a year, compounded quarterly. These are the actual figures the engine produces:

| Years | Paid in | Ends up as |
|---|---|---|
| 10 | €25,000 | €36,542 |
| 20 | €49,000 | €107,682 |
| 30 | €73,000 | €250,075 |
| 40 | €97,000 | €535,090 |

Look at the 30-year row against the 20-year row. Ten extra years of €200 a month is **€24,000 more paid in** — and **€142,394 more at the end**. The growth produced in that last decade alone is larger than the entire balance accumulated over the first twenty years.

That is the part intuition cannot do. We extrapolate in straight lines, and this is not a straight line. Which is precisely why a chart beats a paragraph — you have to *see* the curve pull away from the deposits line to believe it.


<figure>
	<img src="/assets/images/what-if-i-invested/basic_graph.png">
</figure>

## Two modes, one question

The site has two answers to the same question, because "what if" means two different things depending on who is asking.

**Basic mode** is the investor.gov-style projection. You set an estimated rate of return and a variance range, and it runs three scenarios — `rate + range`, `rate`, `rate - range` — as a best / average / worst band. Presets ("Global equity ETF", "S&P 500", "60/40") exist only so you don't have to invent a percentage out of thin air; every number stays editable.

Next to the band sits the same money left in a bank account. **The default bank rate is 0%**, and that is not cynicism, it is the honest default for a euro-area current account. In July 2026 the ECB put the euro-area rate on household **overnight** deposits at [0.28%](https://www.ecb.europa.eu/press/stats/mfi/html/ecb.mir260902~d54675e442.en.html){:target="_blank"}. The site also carries the ECB's agreed-maturity household deposit series — currently 2.14% — for anyone who actually locks money away. With a 0% bank line, the chart says something blunt: *every euro of the gap is compounding you did not get.*

**Advanced mode** is where it gets interesting. You build a portfolio of real funds and shares, pick a start month, and the site backtests those exact holdings against real monthly prices — buy-and-hold with dollar-cost averaging, the initial amount buying units at the start month's price and every contribution buying more at that month's price.

Here is a real run from the published data. iShares Core MSCI World (`IWDA.AS`), €1,000 initial, €200/month, from January 2010 to August 2026:

- **Paid in:** €40,800
- **Portfolio today:** €132,536
- **Same money in the bank, at real historical ECB rates:** €45,749
- **The gap:** €86,787

That is not an assumption. That is what those prices did.

<figure>
	<img src="/assets/images/what-if-i-invested/advanced.png">
</figure>

<!-- ## Two return numbers, because they answer different questions

Advanced mode reports two figures, and the distinction matters more than it sounds.

The **money-weighted return** (or Internal Rate of Return, IRR) is what *you* earned, given when you actually paid money in. The **time-weighted CAGR** is what the *holdings* did, ignoring your deposit schedule.

They come apart in instructive ways. Backtesting `IUSA.AS` (S&P 500) from January 2006 gives a CAGR of **11.18%** but a money-weighted return of **14.03%**. The saver beat the fund — not through skill, but because monthly contributions kept buying through the 2008 crash, when units were cheap. Dollar-cost averaging into a crash is mathematically pleasant and emotionally brutal, which brings me to the third number.

**Max drawdown** for that same run: **−46.6%**. Nearly half the value, gone, and you had to sit through it. It is measured on a separate €1 buy-and-hold stake rather than on the contribution schedule, specifically so that steady deposits don't flatter it. If a backtest is going to show you the reward, it owes you the ride. -->

## What a backtest can and cannot tell you

Backtesting is genuinely powerful. It replaces "roughly 7%, I think?" with "this instrument, these months, this is what happened." It removes the hand-waving from one half of the problem.

It does not remove it from the other half, and the site says so in several places. The honest list:

- **You are picking with hindsight.** Choosing an S&P 500 tracker starting in 2006 is a choice available only to someone who already knows how the story went. Nobody in 2006 had that list.
- **Past performance does not predict future results.** Worth repeating because it is so easy to read a backtest as a forecast in disguise.
- **Everything is before tax, inflation, fees, spreads and currency conversion.** Any one of those can meaningfully change the outcome; inflation over thirty years changes what the final number *means*.
- **No rebalancing.** Weights drift as prices move, and the final drift is reported rather than quietly corrected.
- **No FX conversion.** Mixing a USD holding into a EUR portfolio is **blocked** rather than silently adding euros to dollars. Every holding must share one currency.
- **Monthly closing prices**, from a single free data source, refreshed on a rotation — so the most recent month can be a few days behind.
- **The smooth curve is a lie of the medium.** Real returns do not arrive in equal instalments. The curve is a good way to see how compounding *behaves*; it is not what your account balance looks like on the way there.

Basic mode carries its own warning label: the rate of return is a number *you* chose. The presets are rounded long-run historical averages offered as a starting point, not predictions. A projection is an illustration of a mechanism, not a statement about your future.

## About 200 symbols — and a form for the rest

The searchable universe is about **200 hand-picked funds and shares**: world and regional UCITS ETFs, bond and commodity ETFs, US-listed ETFs, US large caps, European and Italian blue chips.

That is a curated list, not every ticker on earth, and it is a deliberate trade-off to keep the website running without a backend. The consequence is that sometimes you search for something and it isn't there. So the portfolio builder carries a "Can't find what you are looking for? **Ask for it to be added**" link to a [Google Form](https://forms.gle/Xy49vCSJKT2zX1UcA){:target="_blank"}. With no backend, an off-site form is the only way to hear about a gap — and a missing ticker is a fixable gap, not a limitation. Requests land as an edit to the symbol universe.

<!-- ## The architecture: no backend, on purpose

The whole site is a **static export** hosted on GitHub Pages. No API routes, no server. Prices and ECB rates are fetched **at build time**, committed into `public/data/`, and served as plain files next to the page.

That decision does a surprising amount of work:

**It turns a per-visitor problem into a once-a-day one.** Fetching in CI is ~200 requests total, not ~200 per visitor. The repo becomes the cache — shared by everyone, versioned, free.

**It makes the privacy story trivial.** Your browser never talks to a price provider. Nothing you type into the calculator leaves your device, because there is nowhere for it to go. Every calculation runs on your machine.

**It forced the engines to be pure.** `lib/projection.ts` and `lib/backtest.ts` have no React and no network dependency. They take numbers and return numbers, which is why they can be unit-tested directly against closed-form annuity formulas — and why the entire backtest runs in the browser.

Getting the data was the part that took three attempts, and the dead ends are worth recording. **Yahoo Finance** blanket-blocks datacenter IPs — a GitHub runner gets a `429` on its very first request, not after a burst, so no amount of pacing helps. **Twelve Data's** free tier turned out to be US-only, with dividends behind the paywall; its symbol search cheerfully lists European venues you then cannot fetch. **Alpha Vantage** carries the venues this site needs and returns adjusted closes for free, so total return is correct everywhere — at the cost of roughly 25 calls a day, which is why the refresh *rotates* through the neediest symbols instead of fetching everything.

Two amusing traps along the way: London quotes in pence, reported as `GBX`, which is not a real ISO 4217 code — it throws inside `Intl.NumberFormat`, and taken at face value would show a UK holding at 100× its worth. And there is no Borsa Italiana coverage, so Milan-listed names are mapped to their XETRA or Amsterdam listing in the same currency (Enel is `ENL.DEX`, UniCredit `CRIN.DEX`) — same instrument, different venue.

A few other pieces I enjoyed building:

- **The address bar is the save button.** Every edit rewrites the query string, so the URL on screen is always the one worth copying: `/advanced/?holdings=VWCE.DE:60,AAPL:40&add=500&from=2016-01`. Only fields that differ from the defaults are written, and everything read back is clamped to the same limits the inputs impose.
- **English and Italian**, with `en.ts` as the source of truth and `it.ts` typed against it — so a key added in English is a *compile error* until it is translated. Numbers follow the display language, not the currency: an Italian reader gets `72.910 €` and `8,0%`.
- **The disclaimer and the cookie consent are two separate decisions**, deliberately not bundled into one "I agree", because they have different legal bases and bundled consent is not valid consent. Analytics ships switched off, and the script is not added to the page *at all* until someone says yes. -->

## The part I have to repeat

Let me quote the site's own disclaimer, because it is the most important paragraph on it:

> This site is for educational purposes only. It does not give financial advice. Nothing here is a recommendation to buy, sell or hold any investment. Every figure is an estimate, worked out from the best data available to us, and will differ from real-world results. Before making any investment decision, speak to someone licensed to advise you in your own country.

Nothing on the site takes account of your circumstances, goals, tax position or tolerance for risk. I am not licensed to advise anyone and I am not trying to. Treat what you see as an illustration of how compounding behaves — not as a statement of what your money did, or will do.

## Try it

The site is at [whatifiinvested.it](https://whatifiinvested.it){:target="_blank"}, in English and Italian, and the source is on [GitHub](https://github.com/danybony/what-if-i-invested){:target="_blank"}.

Put in a number you recognise — your actual monthly savings, a date you remember — and look at the gap. That gap is the whole argument. It is also, and this is the genuinely useful part, *still available*: the best time to see the curve was twenty years ago, and the second best time is while you still have twenty years of it left.
