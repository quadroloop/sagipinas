module.exports = {
  siteMetadata: {
    title: `An open disaster risk response platform`,
    description: `This is a simple website`,
    author: `@quadroloop`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `testdataX`,
    //     fieldName: `testData`,
    //     url: `https://swapi.dev/api/people/`
    //   },
    // },

    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://swapi.dev/api/people",
        rootKey: "results",
        schemas: {
          results: `
             name: String
            `
        }
      }
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
