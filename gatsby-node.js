/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import path from 'path';
import { graphql } from 'gatsby';

exports.createPages = async function ({ actions }) {
    const {createPage} = actions;
   return graphql(`
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
    `).then(result => {
        result.data.allStrapiArticle.edges.forEach(({node}) => {
            createPage({
                path: `${node.node.id}`,
                component: path.resolve(`./src/components/templates/article.js`),
                context: {
                    id: node.node.id
                }
            })
        })
    })
}

// // Called after every page is created
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions

//     // page.matchPath is special key thats used for matching apges
//     // only on the client

//     if (page.path.match(/^\/app/)) {
//         page.matchPath = "/app/*"

//         //Update the page
//         createPage(page)
//     }
// }