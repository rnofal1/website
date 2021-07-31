/* This file is where I take all of my useful Gatsby stuff and implement it into my site */
/* Goal: grab data from files, then transform the content*/
module.exports = {
    siteMetadata: { //Add a site-wide title
        title: `Ramsey Nofal`,
      },
    plugins: [  
        { // This will allow me to fetch data from my filesystem
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
          },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
          resolve: `gatsby-plugin-typography`,
          options: { //Implement the style/typography plugins
            pathToConfigModule: `src/utils/typography`,
          },
        },
    ]
}