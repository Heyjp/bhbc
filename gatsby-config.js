module.exports = {
  pathPrefix: "/bhbc",
  siteMetadata: {
    title: 'Burgess Hill Bowls Club',
    description: 'Burgess Hill Bowls Club website'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://bhbc.herokuapp.com',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'article', 'file', 'fixture'
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',

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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}