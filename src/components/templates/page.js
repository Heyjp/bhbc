import React from 'react';
import Layout from '../../components/layout' 

import { StaticQuery, graphql } from "gatsby"

import ReactMarkdown from 'react-markdown';

const PageTemplate = ({data}) => {
    const {page_title, page_content }= data.strapiPage;
    return (
        <Layout>
            <div className="container">
                <section className="content history-wrap article-wrap">
                    <div className="columns is-centered"> 
                        <div className="column is-four-fifths ">
                            <h2 className="subtitle is-3">{page_title}</h2>
                            <div className="level article-info">
                                <div className="level-left">
                                    <div className="level-item">
                                        <h6 className="subtitle is-7 is-marginless">Created on {new Date(updatedAt).toDateString()}</h6>
                                    </div>
                                    <div className="level-item">
                                        <h6 className="subtitle is-7 is-marginless has-text-grey-darker">by {author.username}</h6>
                                    </div>
                                </div>
                            </div>
                            <hr className="article-break"/>
                            <ReactMarkdown source={page_content} />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )}

export default () => (
    <StaticQuery 
        query={query}
        render={data => (
            <PageTemplate data={data} />
        )}
    />
)

const query = graphql`
    query ($id: String) {
        strapiPage(id: {eq: $id}) {
            page_title
            page_content
        }
    }
`
    