/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();


module.exports = {
  siteMetadata: {
    title: `Gatsby Skeleton`,
    siteUrl: `https://squelette.netlify.app/`,
    version: `0.0.2`,
    author: `stanislas Marçais`,
  },
  plugins: [
    // FONT
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
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
        name: `content fr`,
        path: `${__dirname}/media/markdown_content/fr`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content en`,
        path: `${__dirname}/media/markdown_content/en`,
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
