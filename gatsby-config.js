module.exports = {
  // Customize me!
  siteMetadata: {
    company: 'Emerald City Photo Booth',
    domain: 'https://emeraldcityphotobooth.com',
    defaultTitle: 'Emerald City Photo Booth',
    preamble: 'friends, photos, fun',
    defaultDescription:
      'Emerald City Photo Booth is proud to offer the most AMAZING photo booths for any event! We travel all over Washington state bringing our innovative photo booths to weddings, anniversaries, proms, graduations, corporate events, birthday parties and more, for maximized FUN!',
    postamble:
      "Ready to book a booth for your event? We'd love to hear from you:",
    contact: {
      email: 'cmcnett@emeraldcityphotobooth.com',
    },
    menuLinks: [],
    siteUrl: 'https://emeraldcityphotobooth.com'
  },
  plugins: [
    'gatsby-plugin-less',
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Emerald City Photo Booth",
        short_name: "Emerald City Photo Booth",
        start_url: "/",
        background_color: "#5cbc5e",
        theme_color: "#5cbc5e",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/img/header.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: 'src/img',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-20215326-1',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'emeraldcityphotobooth',
      },
    },
  ],
};
