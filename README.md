# Monopixel

Live Hypixel SkyBlock bazaar tracker with integrated money-making calculators, auction sniping, and watchlist.

![screenshot](screenshot.png)

## Features

**Bazaar tracker** — real-time prices for all bazaar items in a sortable, filterable table organized by categories (farming, mining, combat, foraging, fishing, oddities). Data auto-refreshes every 60 seconds via the Hypixel API.

**Categories & watchlist** — filter by in-game bazaar categories with live item counts. Bookmark items with a star for quick access across sessions.

**Money-making methods** — four automated strategies derived from live bazaar data:

- **Order flipping** — top items by buy order → sell offer spread, with 1% tax accounted for
- **NPC flipping** — items profitable to buy from NPC shops and instant-sell on the bazaar
- **Craft flipping** — 50+ recipes where buying materials and crafting yields profit
- **Volume trading** — highest 7-day trade volume items for bulk strategies

**Fusing** — 52 upgrade recipes (gemstone fusing, enchanted blocks, forge) ranked by profit.

**Minion calculator** — estimated coins per day for 39 minions at T11, ranked by current bazaar prices.

**Auction sniper** — scans the first 5 auction pages for BIN listings priced below bazaar instant-sell price. Requires API key.

**Guides** — curated strategy guides filterable by difficulty (beginner, intermediate, advanced).

**Themes** — dark, light, warm, and SkyBlock variants with localStorage persistence.

## Usage

Open `index.html` in a browser or serve with any static server. No build step or dependencies required.

```
git clone https://github.com/<user>/<repo>.git
cd <repo>
python -m http.server 8000
```

The bazaar endpoint works without authentication. For auction sniper features, add your Hypixel API key to the `API_KEY` constant in `app.js`.

## API

All data from the [Hypixel Public API](https://api.hypixel.net/):

| Endpoint | Auth |
|---|---|
| `/v2/skyblock/bazaar` | optional |
| `/v2/skyblock/auctions` | required |

## Deploy

Works on any static host. For GitHub Pages:

1. Push to GitHub
2. Settings → Pages → Source: **Deploy from a branch**
3. Select branch and root folder, save

## Structure

```
.
├── index.html    # markup
├── styles.css    # theme stylesheet
├── app.js        # bazaar fetch, calculators, auctions, themes
└── README.md
```

## License

MIT
