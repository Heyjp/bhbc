import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Gallery = (props) => {
    return (
        <Layout>
            <div className=""> 
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full">
                            <GalleryHeader/>
                            <GalleryBody images={props.data.allStrapiPhoto.edges} />    
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

const GalleryHeader = () => (
    <div className="gallery-header">
        <h1 className="subtitle is-2">Gallery</h1>
        <hr  />
    </div>
)

const GalleryBody = ({images}) => (
    <div className="columns is-multiline is-centered">
        {
             images.map(({node}) => {
                return (
                    <ImageCard description={node.description} url={node.file.publicURL} />
                )
            })
        }
    </div>
)

const ImageCard = ({url, description}) => (
    <div className="column is-one-quarter">
        <div class="card">
            <div class="card-image">
                <figure class="image is-3by2">
                    <a href={`${url}`}><img src={`${url}`} /></a>
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    {description}
                </div>
            </div>
        </div>
    </div>
)

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