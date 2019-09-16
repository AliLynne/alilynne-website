const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: 'AliLynne',
    titleTemplate: "%s | AliLynne",
    author: 'Ali Lynne Thompson',
    description: 'Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.',
    url: "https://www.alilynne.com",
    siteUrl: "https://www.alilynne.com",
    image: "/src/images/rosePink.png",
    twitterUsername: "@alilynnet",
    stripe: {
      public_key: 'pk_live_5nKb8kqHdyaoi9bASiiKbdOO00eHIdX5YK',
      plans:
        [
          {
            "label": "$5 per month",
            "id": "plan_Fm950fWNdiNekC"
          },
          {
            "label": "$10 per month",
            "id": "plan_Fm96pTXYQTIoad"
          }
        ],
      button_text: "Keep Me Going",
      success_page: "success",
      cancel_page: "cancel"
    }
  },
  plugins: [
    `gatsby-remark-images`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: {order: DESC, fields: [frontmatter___date]},
                  filter: {frontmatter: {draft: {ne: true}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: `rss.xml`
          }
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts`,
        ignore: isProd ? ['**/_*.md'] : []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Roboto', 'Dancing Script']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/rosePink.svg`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        trackingUrl: `fathom.tdvm.net`,
        siteId: 'KOKQF'
      }
    },
    {
      resolve: `gatsby-plugin-react-axe`,
      options: {
        showInProduction: false
      }
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: 'en'
      }
    }
  ]
}
