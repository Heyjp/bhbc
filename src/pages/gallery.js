import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Gallery = (props) => {
    return (
        <Layout>
            <div className="container main-content gallery-wrap">
                <div className="columns is-centered">
                    <div className="column is-full">
                        <GalleryHeader/>
                        <GalleryBody images={props.data.allStrapiPhoto.edges} />    
                    </div>
                </div>
            </div>
        </Layout>
    )
};

const GalleryHeader = () => (
    <div className="columns is-centered">
        <div className="column is-four-fifths">
            <div className="gallery-header">
                <h1 className="subtitle is-3 has-text-weight-light">Club Photos</h1>
                <hr  />
            </div>
        </div>
    </div>
)


const GalleryBody = ({images}) => (
    <div className="columns is-centered">
        <div className="column is-four-fifths">
            <div className="columns is-multiline">
                {
                    images.map(({node}, index) => {
                        return (
                            <ImageCard key={`image-${index}`} description={node.description} url={node.photo.childImageSharp.original.src} />
                        )
                    })
                }
            </div>
        </div>
    </div>
)

const ImageCard = ({url, description}) => (
    <div className="column is-one-third">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <a href={`${url}`}><img src={`${url}`} /></a>
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
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
                    description
                    photo {
                        childImageSharp {
                            original {
                                width
                                height
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`