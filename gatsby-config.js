module.exports = {
  pathPrefix: "/gatsby-twrp-site",
  siteMetadata: {
    title: `TWRP`,
    description: `TWRP Band Homepage`,
    author: `@trailblazingfive`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TWRP`,
        short_name: `TWRP`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/twrp-icon.png`,
      },
    },
  ],
}
