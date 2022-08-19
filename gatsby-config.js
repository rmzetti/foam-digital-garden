module.exports = {
  pathPrefix: "/foam-digital-garden",
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/notes`,
        rootNote: `/index`,
      },
    },
    {
      resolve: `gatsby-remark-wiki-link`,
    },
  ],
  siteMetadata: {
    title: `My Digital Garden`,
  },
}
