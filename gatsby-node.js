const path = require('path');


exports.createPages = async function ({ actions, graphql }) {
    const { createPage } = actions;
    return graphql(`

            {
                pages: allStrapiPage {
                    edges {
                        node {
                            id
                            page_title
                            page_content
                        }
                    }
                }
                articles: allStrapiArticle {
                    edges { 
                        node {
                            id
                            title
                            content
                            createdAt
                        }
                    }
                }
            }

    `).then(result => {
        result.data.articles.edges.forEach(({node}) => {
            createPage({
                path: `/news/${node.id}`,
                component: path.resolve(`./src/components/templates/article.js`),
                context: {
                    id: node.id
                }
            })
        })

        result.data.pages.edges.forEach(({node}) => {
            console.log(node, 'this is node');
            createPage({
                path: `/page/${node.page_title}`,
                component: path.resolve(`./src/components/templates/page.js`),
                context: {
                    id: node.id
                }
            })
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