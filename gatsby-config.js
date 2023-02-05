/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Skeleton`,
    siteUrl: `https://squelette.netlify.app/`,
    version: `0.0.2`,
    author: `stanislas Marçais`,
  },
  plugins: [
    // image part
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    // file importation
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown pages`,
        path: `${__dirname}/media/markdown_pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown content`,
        path: `${__dirname}/media/markdown_content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/media/images`,
      },
    },
    // Markdonw part
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
