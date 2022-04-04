import path from "path";

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Andrew Cetnarskyj ",
    titleTemplate: "%s · Andrew Cetnarskyj Portfolio",
    description:
      "A portfolio work by Edinburgh based, product designer and design system builder Andrew Cetnarskyj.",
    siteUrl: "https://just-andy.uk", // No trailing slash allowed!
    image: "/images/twitter_banner.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@justandydesign1",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/justandydesign1",
        icon: "RiTwitterLine",
      },
      {
        name: "github",
        url: "https://github.com/just-andy",
        icon: "RiGithubLine",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/just_andy_c/",
        icon: "RiInstagramLine",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/andrewcetnarskyj/",
        icon: "RiLinkedinBoxLine",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx-embed`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-sitemap`,
      exclude: [`/404/`],
      query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              containerClass: "embedVideo-container", // Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
              showCaptions: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Cartridge-Regular"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Just Andy`,
        short_name: `Just Andy`,
        start_url: `/`,
        background_color: `#2B2523`,
        theme_color: `#F8B236`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banners`,
        path: path.resolve(`src/images/`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.resolve(`src/content/projects/`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: path.resolve(`static/fonts/`),
      },
    },
  ],
};

export default config;
