# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Editing docs

This site runs **three unversioned Docusaurus docs instances** (`community/`, `creativetv/`, `creativebank/`). See [Editing Documentation](/community/contributing/editing-documentation) for frontmatter, local preview, deploy, and Algolia search sync.

Quick checklist after changing Markdown:

1. `yarn start` — preview locally
2. `yarn build` — verify links before PR
3. Merge + deploy — publish to creativeplatform.xyz
4. `yarn algolia:sync` — refresh site search index

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
