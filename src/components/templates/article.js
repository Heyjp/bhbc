import React from 'react';
import Layout from '../../components/layout' 
import { graphql, StaticQuery } from 'gatsby';

import ReactMarkdown from 'react-markdown';

const ArticleTemplate = ({data}) => {
    const {title, content, updated_at }= data.strapiArticle;
    console.log(updated_at, 'this is updated')
    return (
        <Layout>
            <div className="container">
                <section className="content history-wrap article-wrap">
                    <div className="columns is-centered"> 
                        
                        <div className="column is-four-fifths">
                        <div className="level">
                            <nav className="breadcrumb has-succeeds-separator " aria-label="breadcrumbs">
                                <ul className="is-marginless">
                                    <li><a href="#" style={{'marginTop': '0.25em'}}>Home</a></li>
                                    <li><a href="#">News</a></li>
                                    <li className="is-active"><a href="#" aria-current="page">Article</a></li>
                                </ul>
                            </nav>
                        </div>
                            <h2 className="subtitle is-3">{title}</h2>
                            <div className="level article-info">
                                <div className="level-left">
                                    <div className="level-item">
                                        <h6 className="subtitle is-7 is-marginless">Created on {new Date(updated_at).toDateString()}</h6>
                                    </div>
                                    <div className="level-item">
                                        {/* <h6 className="subtitle is-7 is-marginless has-text-grey-darker">by {user.username} </h6> */}
                                    </div>
                                </div>
                            </div>
                            <hr className="article-break"/>
                            <ReactMarkdown className="content" source={content}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default ArticleTemplate;
    
export const query = graphql`
    query ArticleQuery ($id: String) {
        strapiArticle(id: {eq: $id}) {
            title
            content
            updated_at
        }
    }
`
