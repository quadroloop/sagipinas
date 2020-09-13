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
      logo: {
        alt: "SagiPinas Logo",
        src: "img/sagipinas-logo-transparent.png",
        href: "/",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "General",
              to: "docs/",
            },
          ],
        },

        {
          title: "Quick Links",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Hydraean",
              to: "https://github.com/Hydraean",
            },
            {
              label: "Seantinel Documentation",
              to:
                "https://docs.google.com/document/d/1WA-s12B3Y8vTE4WQVeguRMCxdUF_XfPRMaNKsNOTw0c/edit#heading=h.z6ne0og04bp5",
            },
            {
              label: "GitHub",
              href: "https://github.com/SagiPinas",
            },
          ],
        },

        {
          title: "Credits",
          items: [
            {
              label: "Icons by FlatIcon",
              href: "https://www.flaticon.com/",
            },
            {
              label: "Icons by Eucalyp",
              href: "https://www.flaticon.com/authors/eucalyp",
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
          homePageId: "original-doc",
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
