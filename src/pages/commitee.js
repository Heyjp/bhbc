import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby'

export default (props) =>{ 
    const { data: { allStrapiCommittee: { edges } } } = props
    const [ list ] = edges
    const { node: { image: { publicURL: url }, officer } } = list
    return (
        <Layout>
            <div className="container ">
                <section className="content commmittee-wrap">
                        <div className="columns is-centered"> 
                            <div className="column is-four-fifths">
                                <h1 className="title is-3 has-text-weight-light">Your Officers and GMC 2020</h1>
                                <hr />
                                <div className="columns">
                                    <div className="column is-two-fifths">
                                        <CommitteeTable data={officer} />
                                    </div>
                                    <div className="column">
                                        <img alt="burgess hill bowls club commitee group" src={url} />
                                    </div>
                                </div>
                            </div>   
                        </div>
                </section>
            </div>
        </Layout>     
    )      
}

const CommitteeTable = (members) => {
    return (
        <table className="table is-bordered is-striped">
            <thead>
                <tr color="primary">
                    <td>Position</td>
                    <td>Held By</td>
                </tr>
            </thead>
            <tbody>
                {
                    members.data.map((officer) => {
                        const { id, name, position } = officer
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{position}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export const pageQuery = graphql `
 { 
    allStrapiCommittee {
        edges {
          node {
            image {
                publicURL
                relativePath
                absolutePath
            }
            officer {
              id
              position
              name
            }      
          }
        }
    }
  }
`