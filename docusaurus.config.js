module.exports = {
  plugins: ["docusaurus-plugin-sass"],
  title: "SagiPinas",
  tagline: "An open-source disaster risk response platform",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "SagiPinas", // Usually your GitHub org/user name.
  projectName: "sagipinas", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "SagiPinas",
      logo: {
        alt: "SagiPinas Logo",
        src: "img/sagipinas-logo-transparent.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // logo: {
      //   alt: 'SagiPinas Logo',
      //   src: 'img/sagipinas-logo-transparent.png',
      //   href: '/',
      // },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/SagiPinas",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SagiPinas. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
