module.exports = {
  plugins: ["docusaurus-plugin-sass"],
  title: "SagiPinas",
  tagline: "An open-source disaster risk response platform",
  url: "https://sagipinas.now.sh",
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
          position: "right",
        },
        {
          to: "/docs/seantinel",
          label: "Seantinel",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/quadroloop/sagipinas",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    googleAnalytics: {
      trackingID: "UA-153524072-1",
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
            {
              label: "SagiPinas / v1",
              to: "docs/v1-doc",
            },
            {
              label: "Seantinel Project",
              to: "docs/seantinel",
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
          editUrl: "https://github.com/quadroloop/sagipinas/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/quadroloop/sagipinas/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
