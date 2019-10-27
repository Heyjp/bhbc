const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function ({ actions, graphql }) {
    const { createPage } = actions;
    const query = await graphql(`
            {
                pages: allStrapiPage {
                    edges {
                        node {
                            id
                            title
                            content
                        }
                    }
                }
                articles: allStrapiArticle {
                    edges { 
                        node {
                            id
                            title
                            content
                            created_at
                        }
                    }
                }
            }

    `);

   

    const { articles, pages } = query.data;

    await articles.edges.forEach(({node}) => {
        createPage({
            path: `/news/${node.id}`,
            component: path.resolve(`./src/components/templates/article.js`),
            context: {
                id: node.id
            }
        })
    })

    await pages.edges.forEach(({node}) => {
        const {id, title} = node;
        const url = string_to_slug(title);
        
        createPage({
            path: `/site/${url}`,
            component: path.resolve(`./src/components/templates/page.js`),
            context: {
                id: id,
                url: `/site/${url}`,
                title: node.title
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

function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaaeeeeiiiioooouuuunc------";
  
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
  
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-") // collapse dashes
      .replace(/^-+/, "") // trim - from start of text
      .replace(/-+$/, ""); // trim - from end of text
  
    return str;
  }