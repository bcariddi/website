module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: 'http://briancariddi.com',
    // Your Name
    name: 'Brian Cariddi',
    // Main Site Title
    title: 'Brian Cariddi | Developer',
    // Description that goes under your name in main bio
    description: 'CS @ Notre Dame',
    // Optional: Twitter account handle
    author: 'bcariddi',
    // Optional: Github account URL
    github: 'https://github.com/bcariddi',
    // Optional: LinkedIn account URL
    linkedin: 'https://www.linkedin.com/in/bcariddi',
    // Content of the About Me section
    about: 'Hi, I\'m Brian!',
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Spotify Playlist Lyrics',
        description:
          'Tool to analyze the sentiment of all lyrics in a playlist using Spotify API and Python',
        link: 'https://github.com/bcariddi',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Booz Allen Hamilton',
        description: 'Data Science Intern, Summer 2020',
        link: 'https://github.com/bcariddi',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, C, C++',
      },
      {
        name: 'Other',
        description:
          'Git',
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
