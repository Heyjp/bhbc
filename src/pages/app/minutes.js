import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { brotliDecompress } from "zlib"

const Minutes = props => {
  return (
    <div className="container">
      <section className="content">
        <div className="columns minutes-wrap is-centered ">
          <div className="column is-three-quarters minute-col">
            <h3 className="subtitle is-3">Minutes</h3>
            <hr />
            <table className="table is-fullwidth is-bordered is-striped">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Date</td>
                  <td>Download Link</td>
                </tr>
              </thead>
              <tbody>
                {props.data.allStrapiMinute.edges.map(({ node }) => {
                  return (
                    <tr key={node.id}>
                      <td>{node.name}</td>
                      <td>{new Date(node.date).toDateString()}</td>
                      <td>
                        <a
                          className="button is-link"
                          href={node.file.publicURL}
                          download
                        >
                          Click here to download
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Minutes

export const query = () => (
  <StaticQuery
    query={graphql`
      query MinutesQuery {
        allStrapiMinute {
          edges {
            node {
              title
              date
              file {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={Minutes}
  />
)
