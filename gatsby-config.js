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
  ],
  siteMetadata: {
    title: `My Digital Garden`,
  },
}
