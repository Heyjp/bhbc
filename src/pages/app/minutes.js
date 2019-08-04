import React from "react"
import { StaticQuery, graphql } from 'gatsby';

const Files = (props) =>  {
      return (
        <div className="container">
          <section className="content" >
            <div className="columns minutes-wrap is-centered ">
              <div className="column is-three-quarters minute-col">
              <h3 className="subtitle is-3">Minutes</h3>
              <hr/>
              <table className="table is-fullwidth is-bordered is-striped">
                  <thead>
                      <tr>
                          <td>Name</td>
                          <td>Date</td>
                          <td>Download Link</td>
                      </tr>
                  </thead>
                  <tbody>
                    {props.allStrapiMinute.edges.map(({node}) => (
                      <tr key={node.id}>
                        <td>{node.name}</td>
                        <td>{new Date(node.date).toDateString()}</td>
                        <td>
                            <a className="button is-link" href={node.file.url} download>Click here to download</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )
}

export default () => (
  <StaticQuery
    query={graphql`
      query MinutesQuery {
        allStrapiMinute {
          edges {
            node {
              id
              title
              date
              file {
                url
              }
            }
          }
        }
      }
  `} render={Files} />
);

