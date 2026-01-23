// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative',
  tagline: 'The Stage is YOURS',
  url: 'https://creativeplatform.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/creative-icon-header.ico',
  organizationName: 'g2entgroup', // Usually your GitHub org/user name.
  projectName: 'creative-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/g2entgroup/creative-website/',
          sidebarCollapsible: true,
        },
        blog: {

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: 'G-JYLMMFQ9L0',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        // The application ID provided by Algolia
        appId: 'L057IAF2ES',
  
        // Public API key: it is safe to commit it
        apiKey: '2b26fab9cd7ce56b126b883282923890',
  
        indexName: 'creative',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.xyz|domain\\.xyz',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      announcementBar: {
        id: 'support_us',
        content:
          'The Web3 platform for creators, fans and brands.<strong><a target="_blank" rel="noopener noreferrer" href="https://tv.creativeplatform.xyz"> Launch Creative TV</a></strong>',
        backgroundColor: '#2B1A20',
        textColor: '#52F761',
        isCloseable: true,
      },
      navbar: {
        title: 'CREATIVE',
        logo: {
          alt: 'Creative Logo',
          src: 'img/Creative_logo-200.svg',
        },
        items: [
          {
            to: '/creators',
            label: 'Creators',
            position: 'left',
          },
          {
            to: '/fans',
            label: 'Fans',
            position: 'left',
          },
          {
            to: '/brands',
            label: 'Brands',
            position: 'left',
          },
          {
            to: '/how-it-works',
            label: 'How it Works',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Launch Apps',
            position: 'right',
            items: [
              {
                href: "https://app.creativeplatform.xyz",
                label: "Creative App",
              },
              {
                href: "https://tv.creativeplatform.xyz",
                label: "Creative TV",
              },
              {
                href: "https://news.creativeplatform.xyz/subscribe",
                label: "Get Updates",
              },
            ],
          },
          // {
          //   href: "https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195",
          //   label: "Podcast",
          //   position: "right",
          // },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: "Farcaster",
                href: "https://farcaster.xyz/thecreative.eth",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/creativecrtv",
              },
              {
                label: "Discord",
                href: "https://discord.com/servers/creative-779364937503604777",
              },
              {
                label: "Telegram",
                href: "https://t.me/+PaiZoO2ojAAyOGRh"
              },
            ]
          },
          {
            title: 'Collections',
            items: [
              {
                href: "https://join.creativeplatform.xyz",
                label: "Members",
                
              },
              {
                href: "https://marketplace.urbanuprisecrew.com/",
                label: "UUC",
              },
            ]
          },
          {
            title: 'Partner Solutions',
            items: [
              {
                label:"T-Mobile for Business",
                href: "https://mdm.creativeplatform.xyz",
              },
            ]
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/legal/privacy-policy',
              },
              {
                label: 'Terms & Conditions',
                to: 'docs/legal/terms-conditions',
              },
              {
                label: 'Blog',
                href: 'https://blog.creativeplatform.xyz',
              },
              {
                href: 'https://github.com/creativeplatform',
                label: 'GitHub',
              },
            ]
          },
        ],
        logo: {
          alt: "Creative logo",
          src: "img/Creative_logo-200.svg",
          width: 60,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Creative Organization DAO LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    },
};

module.exports = config;
