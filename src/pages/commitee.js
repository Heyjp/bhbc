import React from 'react';
import Layout from '../components/layout.js';

import committee from '../images/committee-min.jpg'

export default (props) => (
    <Layout>
        <div className="container ">
            <section className="content commmittee-wrap">
                    <div className="columns is-centered"> 
                        <div className="column is-four-fifths">
                            <h1 className="title is-3 has-text-weight-light">Your Officers and GMC 2019</h1>
                            <hr />
                            <div className="columns">
                                <div className="column is-two-fifths">
                                    <CommitteeTable data={props.data.allStrapiOfficer}/>
                                </div>
                                <div className="column">
                                    <img alt="burgess hill bowls club commitee group" src={committee} />
                                </div>
                            </div>
                        </div>   
                    </div>
            </section>
        </div>
    </Layout>      
)

const CommitteeTable = (members) => (
    <table className="table is-bordered is-striped">
        <thead>
            <tr color="primary">
                <td>Position</td>
                <td>Held By</td>
            </tr>
        </thead>
        <tbody>
            {
                members.map(({member, position}) => {
                    return (
                        <tr>
                            <td>{member}</td>
                            <td>{position}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
)

export const pageQuery = graphql `
 { 
    tournament: allStrapiOfficer {
      edges {
        node {
            position
            member
        }
      }
    }
  }
`