import React from 'react';
import Layout from '../components/layout.js';
import { Link, graphql } from 'gatsby'

const MAX_LENGTH = 132;

function limitTextLength(text, maxlength = MAX_LENGTH) {

    if (text.length > maxlength) {
        return text.substr(0, maxlength) + '...';
    }

    return text;
}

const NewsList = ({data}) => {

    return (
        <Layout>
            <div className="events-wrapper main-content wrap">
                <div className="container">
                    <div className="columns is-centered"> 
                        <div className="column is-four-fifths ">
                            <section className="content history-wrap">
                                <h3 className="title is-3 has-text-weight-light">Latest News</h3>
                                <hr />
                                <ul className="news-list">
                                    {
                                        data.allStrapiArticle.edges.map(({node}) => {
                                            return (
                                                <li key={node.id} className="news-item">
                                                    <h2><Link to={`/news/${node.id}`}>{node.title}</Link></h2>
                                                    <h5 className="subtitle is-5">{new Date(node.updatedAt).toDateString()}</h5>
                                                    <p>{limitTextLength(node.content)}</p>
                                                </li>   
                                            )
                                        })
                                    }
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>  
            </div>  
        </Layout>
    )
    
}

export default NewsList;

export const pageQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          updated_at
        }
      }
    }
  }
`