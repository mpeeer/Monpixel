# SkyBlock Bazaar

Live Hypixel SkyBlock bazaar price tracker with integrated money-making calculators.

![screenshot](screenshot.png)

## Features

**Bazaar tracker** — real-time prices for all bazaar items in a sortable, filterable table. Data refreshes every 30 seconds from the public Hypixel API.

**Money-making methods** — four automated strategies derived from live bazaar data:

- **Order flipping** — top items by buy order → sell offer spread, with 1% tax accounted for
- **NPC flipping** — items profitable to buy from NPC shops and instant-sell on the bazaar
- **Craft flipping** — recipes where buying materials and crafting yields profit after instant-selling
- **Volume trading** — highest 7-day trade volume items for bulk strategies

**Minion calculator** — estimated coins per day for 39 minions at T11, ranked by current bazaar prices. Assumes instant-selling via enchanted hopper.

**Guides** — curated strategy guides filterable by difficulty (beginner, intermediate, advanced).

**Custom themes** — dark, light, warm, and SkyBlock variants with localStorage persistence.

## Usage

Open `index.html` in a browser. No build step, no dependencies, no API key required.

```
git clone https://github.com/<user>/<repo>.git
cd <repo>
open index.html
```

## API

All data from the [Hypixel Public API](https://api.hypixel.net/):

| Endpoint | Auth |
|---|---|
| `/v2/skyblock/bazaar` | none |

## Deploy

Works on any static host. For GitHub Pages:

1. Push to GitHub
2. Settings → Pages → Source: **Deploy from a branch**
3. Select branch and root folder, save

## Structure

```
.
├── index.html    # markup
├── styles.css    # 4-theme stylesheet
├── app.js        # bazaar fetch, calculators, guides, theme switcher
└── README.md
```

## License

MIT
