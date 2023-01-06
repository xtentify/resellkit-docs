// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documenting ResellKit',
  tagline: 'Lets publish to multiple platforms!',
  url: 'https://docs.resellkit.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'xtentify',
  projectName: 'resellkit-docs',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/xtentify/resellkit-docs/tree/main/',
        },
        blog: false, // Optional: disable the blog plugin
        /*
        blog: {
          showReadingTime: true,
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: null,// 'docs.resellkit.app',
        logo: {
          alt: 'ResellKit',
          src: 'img/resellkit-docs-logo-88p.png',
          href: '/',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get started',
          },
          //{to: 'https://blog.resellkit.app/', label: 'Blog', position: 'left'},
          {
            label: 'Download',
            position: 'right',
            to: 'https://resellkit.app/download/',
          },
          {
            position: 'right',
            label: 'Home',
            to: 'https://resellkit.app/',
            // activeBaseRegex: '^/$',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/intro',
              },
              {
                label: 'Download & Install (RK)',
                to: '/install-rk',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/kDVgy96nBJ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*
              {
                label: 'Blog',
                to: 'https://blog.resellkit.app/',
              },
              */
              {
                href: 'https://github.com/xtentify/resellkit-docs',
                label: 'GitHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xtentify LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
