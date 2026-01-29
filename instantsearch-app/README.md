# Creative InstantSearch App

A standalone search UI for the Creative platform using Algolia InstantSearch.js.

## Setup

```bash
cd instantsearch-app
yarn install
```

## Run

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build
```

## Configuration

- **App ID:** L057IAF2ES
- **Index:** creative
- **Attributes displayed:** lvl0, content, lvl1

## Features Enabled

| Feature | How |
|---------|-----|
| **A/B Testing** | Dashboard → A/B Testing (requires events) |
| **Analytics** | `insights: true` + Events hub |
| **Related Items** | `relatedProducts` widget (objectID: /community/intro) |
| **Trending Items** | `trendingItems` widget (popular pages) |
| **Trending Facet Values** | Deprecated – not available in InstantSearch.js |

**Prerequisites:** Run `yarn algolia:export`, `yarn algolia:upload`, and `yarn algolia:config` from the project root. Enable Algolia Recommend in the dashboard for Related Items and Trending Items (requires 30+ days of event data to train models).
