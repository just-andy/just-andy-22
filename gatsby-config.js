module.exports = {
    siteMetadata: {
        title: 'Andrew Cetnarskyj Portfolio',
        titleTemplate: '%s · Andrew Cetnarskyj Portfolio',
        description: 'A portfolio work by Edinburgh based, product designer and design system builder Andrew Cetnarskyj.',
        siteUrl: 'https://andrewcetnarskyj.co.uk', // No trailing slash allowed!
        image: '/images/banner.jpg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@justandydesign1',
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/justandydesign1',
                icon: 'RiTwitterLine'
            },
            {
                name: 'github',
                url: 'https://github.com/just-andy',
                icon: 'RiGithubLine'
            },
            {
                name: 'instagram',
                url: 'https://www.instagram.com/just_andy_c/',
                icon: 'RiInstagramLine'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/andrewcetnarskyj/',
                icon: 'RiLinkedinBoxLine'
            },
        ],
    },
    plugins: [
        {resolve: `gatsby-plugin-sharp`,
          options: {
            defaults: {
              className: 'rounded-xl',
              imgClassName: 'rounded-xl'
            }
          }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-mdx-embed`,
        `gatsby-transformer-sharp`,
        `gatsby-remark-images`,
        `gatsby-plugin-sitemap`,
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
                  showCaptions: false
                },
              },
              {
                resolve: "gatsby-remark-external-links",
                options: {
                  target: "_blank",
                  rel: "nofollow noopener noreferrer"
                }
              },
              `gatsby-remark-copy-linked-files`,
              `gatsby-remark-prismjs`
            ]
          }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ["Cartridge-Regular"],
          urls: ["/fonts/fonts.css"],
        },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Just Andy`,
        short_name: `Just Andy`,
        start_url: `/`,
        background_color: `#FF5E33`,
        theme_color: `#111111`,
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
        name: `fonts`,
        path: `${__dirname}/static/fonts/`
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
