module.exports = {
  siteMetadata: {
    siteTitle: `Thoughts`,
    defaultTitle: `Thoughts`,
    siteTitleShort: `My thoughts`,
    siteDescription: `My personal blog where I write my thoughts`,
    siteUrl: `https://gurupratap-matharu-thoughts.netlify.app`,
    siteAuthor: `@gurupratap-matharu`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/gurupratap-matharu/thoughts`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gurupratap-matharu-thoughts.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
