import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Gallery = (props) => {
    return (
        <Layout>
            <div className="gallery-header">
                <h1 className="subtitle is-2">Gallery</h1>
                <hr />
            </div>
            <section className="gallery">
                <div className="container is-fluid">
                    <div className="columns is-multiline is-centered">
                            {
                                props.data.allStrapiPhoto.edges.map(({node}) => {
                                    return (
                                        <div className="column is-one-quarter">
                                            <div class="card">
                                                <div class="card-image">
                                                    <figure class="image is-3by2">
                                                        <a href={`${node.file.publicURL}`}><img src={`${node.file.publicURL}`} /></a>
                                                    </figure>
                                                </div>
                                                <div class="card-content">
                                                    <div class="content">
                                                        {node.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Gallery;


export const query = graphql`
    {
        allStrapiPhoto {
            edges {
                node {
                    id
                    file {
                        publicURL
                        relativePath
                    }
                    description
                }
            }
        }
    }
`