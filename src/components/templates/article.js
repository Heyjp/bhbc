import React from 'react';
import Layout from '../../components/layout' 
import { graphql, StaticQuery } from 'gatsby';

import ReactMarkdown from 'react-markdown';

const ArticleTemplate = ({data}) => {
    const {title, content, updatedAt, user }= data.strapiArticle;

    return (
        <Layout>
            <div className="container">
                <section className="content history-wrap article-wrap">
                    <div className="columns is-centered"> 
                        <div className="column is-four-fifths ">
                            <h2 className="subtitle is-3">{title}</h2>
                            <div className="level article-info">
                                <div className="level-left">
                                    <div className="level-item">
                                        <h6 className="subtitle is-7 is-marginless">Created on {new Date(updatedAt).toDateString()}</h6>
                                    </div>
                                    <div className="level-item">
                                        <h6 className="subtitle is-7 is-marginless has-text-grey-darker">by {user.username} </h6>
                                    </div>
                                </div>
                            </div>
                            <hr className="article-break"/>
                            <ReactMarkdown source={content} />
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
            <ArticleTemplate data={data} />
        )}
    />
    )
    
const query = graphql`
    query ($id: String) {
        strapiArticle(id: {eq: $id}) {
            title
            content
            user {
                username
            }
            updatedAt
        }
    }
`
    