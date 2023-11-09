// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative',
  tagline: 'The Stage is YOURS',
  url: 'https://creativeplatform.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          trackingID: 'G-8G7Y5SMJZ0',
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
          'Introducing our brand new decentralized notification channels, <strong>The Creative Notifications</strong> and <strong>The Creative</strong> using <strong><a target="_blank" rel="noopener noreferrer" href="https://push.org">push.org</a></strong>!',
        backgroundColor: '#2B1A20',
        textColor: '#52F761',
        isCloseable: false,
      },
      image: "img/Creative_logo-200.svg",
      metadata: [
        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "The Creative" },
        { name: "twitter:site", content: "@creativecrtv" },
        { name: "twitter:title", content:"theCREATIVE.eth"},
        { name: "twitter:description", content: "A collective of developers and creatives contributing to the Creative Platform, with a common goal of blockchain technology & making the entertainment industry a better workspace for creativity."},
        { name: "twitter:image", content: "/img/mocs/Creative_Concert.png"}
      ],
      navbar: {
        title: 'CREATIVE',
        logo: {
          alt: 'Creative Logo',
          src: 'img/Creative_logo-200.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            label: 'Platforms',
            position: 'left',
            items: [
              {
                href: "https://tv.creativeplatform.xyz",
                label: "CREATIVE TV",
              },
              {
                href: "https://music.creativeplatform.xyz",
                label: "CREATIVE Music",
              },
              {
                href: "https://marketplace.creativeplatform.xyz",
                label: "CREATIVE Marketplace"
              },
              {
                href: "https://fanverge.creativeplatform.xyz",
                label: "Fanverge"
              },
              {
                href: "https://work.creativeplatform.xyz",
                label: "CREATIVE Work",
              },
              {
                href: "https://dao.creativeplatform.xyz",
                label: "CREATIVE ProjeX",
              },
              {
                href: "https://events.creativeplatform.xyz",
                label: "CREATIVE Events",
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Collections',
            position: 'left',
            items: [
              {
                href: "https://memberships.creativeplatform.xyz",
                label: "CREATIVE Memberships"
              },
              {
                href: "https://kidz.creativeplatform.xyz",
                label: "CREATIVE KIDZ ⌐◨-◨",
              },
              {
                href:"https://urbanuprisecrew.com",
                label: "Urban Uprise Crew",
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Media',
            position: 'left',
            items: [
              {
                href: "https://blog.creativeplatform.xyz",
                label: "News",
              },
              {
                href: "https://blog.creativeplatform.xyz",
                label: "Blog",
              },
            ],
          },
          {
            to: 'blog', 
            label: 'Invest & Earn 💰', 
            position: 'left',
          },
          {
            href: "https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195",
            label: "Podcast",
            position: "right",
          },
          {
            href: "https://news.creativeplatform.xyz/subscribe",
            label: "Get Updates",
            position: "right",
          },
          {
            type: 'docsVersionDropdown',
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/legal/privacy-policy',
              },
              {
                href: 'https://blog.creativeplatform.xyz',
                label: "Blog",
              },
              {
                href: 'https://github.com/creativeplatform',
                label: 'GitHub',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/QxBrFmYwhA",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/creativecrtv",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/creativecrtv",
              },
              {
                label: "The CREATIVE Podcast",
                href: "https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195",
              },
              {
                label: 'Monthly Publication',
                href: 'https://dearcrtv.beehiiv.com',
              },
            ],
          },
          {
            title: 'Platforms',
            items: [
              {
                label:"CREATIVE TV",
                href: "https://tv.creativeplatform.xyz",
              },
              {
                label:"STAGEVERSE Metaverse",
                href: "https://stageverse.com/app/space/63884c376223630008162441/creative-hq",
              },
              {
                label: "Creative Events",
                href: "https://events.creativeplatform.xyz",
              }
            ],
          },
          {
            title: 'Collections',
            items: [
              {
                label: "CREATIVE Membership",
                href: "https://marketplace.creativeplatform.xyz"
              },
              {
                label: "CREATIVE KIDZ ⌐◨-◨",
                href: "https://kidz.creativeplatform.xyz",
              },
              {
                label: "Urban Uprise Crew",
                href: "https://urbanuprisecrew.com/",
              },
            ],
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
