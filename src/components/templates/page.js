import React from 'react';
import Layout from '../../components/layout' 

import { graphql } from "gatsby"

import ReactMarkdown from 'react-markdown';

const PageTemplate = (props) => {
    const {page_title, page_content }= props.data.strapiPage;

    return (
        <Layout>
            <div className="container">
                <section className="content history-wrap article-wrap">
                    <div className="columns is-centered"> 
                        <div className="column is-four-fifths ">
                            <div className="level">
                                <nav className="breadcrumb has-succeeds-separator " aria-label="breadcrumbs">
                                    <ul className="is-marginless">
                                        <li><a href="/" style={{'marginTop': '0.25em'}}>Home</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li class="is-active"><a href="#" aria-current="page">{page_title}</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <h2 className="subtitle is-3">{page_title}</h2>
                            <hr className="article-break"/>
                            <ReactMarkdown className="content" source={page_content} />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )}

export default PageTemplate;

// export const pageQuery = graphql`
//     query HomeQuery($id: String) {
//         strapiPage(id: {eq: $id}) {
//             page_title
//             page_content
//         }
//     }
// `
    