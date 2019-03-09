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
  },
  plugins: [
    'gatsby-plugin-less',
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {},
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
        name: 'data',
        path: 'src/data/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: 'src/img/',
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
