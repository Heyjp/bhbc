/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allStrapiArticle {
                edges { 
                    node {
                        id
                        title
                        content
                        created_at
                        author {
                            username
                        }
                    }
                }
            }
        }
    `)

    await data.allStrapiArticle.edges.forEach((node, index) => {
        actions.createPage({
            path: `${node.node.id}`,
            component: path.resolve(`./src/components/templates/article.js`),
            context: {
                id: node.node.id
            }
        })
    })
}

// Called after every page is created
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is special key thats used for matching apges
    // only on the client

    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"

        //Update the page
        createPage(page)
    }
}