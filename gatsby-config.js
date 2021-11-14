module.exports = {
    siteMetadata: {
        title: 'Andrew Cetnarskyj Portfolio',
        titleTemplate: '%s · Andrew Cetnrskyj Portfolio',
        description: 'A portfolio work by Edinburgh based, product designer and design system builder Andrew Cetnarskyj.',
        siteUrl: 'https://andrewcetnarskyj.co.uk', // No trailing slash allowed!
        image: '/images/banner.jpg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@justandydesign1',
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/justandydesign1',
                icon: 'AiFillTwitterCircle'
            },
            {
                name: 'github',
                url: 'https://github.com/just-andy',
                icon: 'AiOutlineGithub'
            },
            {
                name: 'instagram',
                url: 'https://github.com/just-andy',
                icon: 'AiOutlineInstagram'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/andrewcetnarskyj/',
                icon: 'AiFillLinkedin'
            },
        ],
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-remark-images`,
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            gatsbyRemarkPlugins: [
              {
                resolve: "gatsby-remark-embed-video",
                options: {
                  containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                },
              },
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1920,
                  linkImagesToOriginal: false,
                  showCaptions: true
                },
              },
              `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Just Andy`,
        short_name: `Just Andy`,
        start_url: `/`,
        background_color: `#E34849`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banners`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/content/articles/`
      }
    }
  ]
};
