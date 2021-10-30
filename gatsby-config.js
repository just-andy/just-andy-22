module.exports = {
    siteMetadata: {
        title: '<Whitelabel>',
        titleTemplate: '%s · <Whitelabel>',
        description: 'A portfolio work by Edinburgh based, product designer Andrew Cetnarskyj.',
        siteUrl: 'https://andrewcetnarskyj.co.uk', // No trailing slash allowed!
        image: '/images/banner.jpg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@justandydesign1',
        menuLinks:[
            {
                label:'home',
                url:'/'
            },
            {
                label:'Articles',
                url:'/articles'
            },
            {
                label:'Projects',
                url:'/projects'
            }
        ],
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/justandydesign1',
            },
            {
                name: 'github',
                url: 'https://github.com/just-andy',
            },
            {
                name: 'instagram',
                url: 'https://github.com/just-andy',
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/andrewcetnarskyj/',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-image`,
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
                  maxWidth: 1024,
                },
              },
              `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`
      }
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
