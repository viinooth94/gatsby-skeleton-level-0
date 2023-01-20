/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Skeleton`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/media/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/media/images`,
      },
    },
    //
    // `gatsby-transformer-remark`,
    // 
    {
      resolve : `gatsby-transformer-remark`,
      options : {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options : {
              maxWidth: 800,
            }
          }
        ]
      }
    }
  ],
}
