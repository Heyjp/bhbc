import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Gallery = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    some text
                </div>
            </div>
        </div>
    )
};

export const query = graphql`
    {
        allStrapiImage {
            edges {
                node {
                    id
                    img {
                        publicURL
                    }
                }
            }
        }
    }
`