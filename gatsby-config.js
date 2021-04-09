/* Goal: grab data from files, then transform the content*/
module.exports = {
    siteMetadata: { //Add a site-wide title
        title: `Ramsey's Site`,
      },
    plugins: [  
        { // This will allow me to fetch data from my filesystem
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
          },
        `gatsby-plugin-emotion`,
        {
          resolve: `gatsby-plugin-typography`,
          options: { //Implement the style/typography plugins
            pathToConfigModule: `src/utils/typography`,
          },
        },
    ]
}