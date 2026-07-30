<p align="center">
  <br>
  <img src="screenshot.png" width="800" alt="Monopixel">
  <br>
</p>

<h1 align="center" style="font-size: 48px; font-weight: 600; letter-spacing: -1px; color: #f0f0f0; margin: 20px 0 4px;">Monopixel</h1>

<p align="center" style="font-size: 18px; color: #8b949e; margin: 0 0 24px;">a hypixel database</p>

<p align="center">
  <strong style="color: #7b61ff;">Live SkyBlock bazaar intelligence.</strong>
  <br>
  <span style="color: #8b949e;">Real-time pricing · Profit calculations · Auction sniping · Price trends</span>
</p>

<br>

## Overview

Monopixel transforms raw Hypixel API data into a clean, actionable dashboard. Every tool is built around a single question: *what's the most profitable move right now?*

- **Bazaar tracker** — every item, every price, updated every 30 seconds. Sort, filter by category, search by name. Watchlist your favorites.
- **Money-making methods** — four strategies calculated from live data. Order flipping, NPC flipping, craft flipping, and volume trading.
- **Minion calculator** — estimated coins per day for every T11 minion, ranked by current bazaar prices.
- **Auction sniper** — scans 5,000+ listings to find BIN auctions priced below bazaar instant-sell. Buy low, sell now.
- **Fusing profitability** — gemstone fusing, enchanted blocks, and forge recipes. See which upgrades actually turn a profit.
- **Price alerts** — set a threshold on any item. Get notified when the price drops below your target.
- **Price trends** — tracks movements between refreshes. Top gainers, top losers, and most active items at a glance.
- **Themes** — dark, light, warm, and skyblock. Pick your aesthetic.

<br>

## Features

<p align="center">
  <table>
    <tr>
      <td width="50%" valign="top" style="padding: 12px;">
        <strong>📊 Bazaar Intelligence</strong><br>
        <span style="color: #8b949e; font-size: 14px;">Real-time prices for 1,900+ items. Sortable columns. Category filters (farming, mining, combat, foraging, fishing, oddities). Watchlist with persistent favorites. Margin and ROI calculated automatically.</span>
      </td>
      <td width="50%" valign="top" style="padding: 12px;">
        <strong>💰 Profit Calculators</strong><br>
        <span style="color: #8b949e; font-size: 14px;">Order flipping, NPC flipping, craft flipping, and volume trading — all computed from live market data. Tax-adjusted profit margins. Ranked by ROI.</span>
      </td>
    </tr>
  </table>
</p>

<br>

## Getting Started

Monopixel runs entirely in the browser. No installation, no dependencies.

```
npx http-server /path/to/monopixel -p 8000
```

Then open **http://localhost:8000**.

That's it. The app fetches data directly from the Hypixel public API every 30 seconds. Your API key is included — no sign-up required.

<br>

## Architecture

Monopixel is a single-page application built with vanilla JavaScript, HTML, and CSS. There is no build step, no framework, no bundler.

| Component | Description |
|---|---|
| `index.html` | Application shell with all view templates |
| `app.js` | Data fetching, state management, rendering, calculators |
| `styles.css` | Full responsive design with 4 custom themes |

The Hypixel API key is embedded in the client — the app makes authenticated requests directly to `api.hypixel.net/v2/skyblock/bazaar` and `api.hypixel.net/v2/skyblock/auctions`.

<br>

## Data Sources

| Endpoint | Description |
|---|---|
| `api.hypixel.net/v2/skyblock/bazaar` | Current buy/sell prices, volumes, weekly moving averages for all products |
| `api.hypixel.net/v2/skyblock/auctions` | Active auction listings (used by the sniper) |

Data refreshes automatically every 30 seconds. Auction scans run on demand when you switch to the auctions tab.

<br>

## Screenshots

> Replace the image URL above with your own screenshot. To capture one:
>
> 1. Start the server: `npx http-server . -p 8000`
> 2. Open http://localhost:8000 in a browser
> 3. Take a full-page screenshot (Chrome DevTools → Capture full size screenshot)
> 4. Save as `screenshot.png` in the project root
> 5. Upload to your GitHub repo and update the URL in this README

<br>

## License

MIT
