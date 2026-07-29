# skyblock bazaar

A minimal, functional Hypixel SkyBlock bazaar tracker and money-making method finder. No frameworks, no build step — just open `index.html`.

### features

- **live bazaar prices** — fetches real-time data from the Hypixel Public API every 30 seconds
- **sortable table** — click any column header to sort by item name, buy price, sell price, spread, margin %, or volume
- **search filtering** — filter items by name
- **money-making methods** — two built-in strategies:
  - **bazaar flips** — top 15 order-flip opportunities (place buy order → place sell offer), with 1% bazaar tax accounted for
  - **volume leaders** — top 15 items by 7-day trade volume with estimated daily coin flow
- **responsive** — works on desktop and mobile
- **no API key required** — uses the public `/v2/skyblock/bazaar` endpoint

### usage

Open `index.html` in any browser. That's it.

### deploy on github pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose `main` (or your default branch) and `/ (root)` as the folder.
5. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/`.

No build step or framework needed — the project is pure HTML, CSS, and JavaScript.

### api

Data comes from the [Hypixel Public API](https://api.hypixel.net/) — specifically `https://api.hypixel.net/v2/skyblock/bazaar`. No authentication required.

### license

MIT
