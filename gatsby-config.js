module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/m0tky/c28d018d497a4e2e8683403f54eb43e9?v=6439b17f87784027a99259907d36475a"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/m0tky/616b8d8006a94e56b57214e51dcc1a86?v=affc85534a6343bab8b262e31b82f91d"
            }
        }
    ],
}
