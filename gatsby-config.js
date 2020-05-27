module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/m0tky/cedf19069392486c843f571139212797?v=34387e9287ef45559aa8f8865d586ba3"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/m0tky/84f465ca3cb2407f9054e07ff330ef6a?v=adf4984212444b1381ef2dddd96326c4"
            }
        }
    ],
}
