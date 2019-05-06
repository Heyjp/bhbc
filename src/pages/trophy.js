import React from 'react'
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

import LeagueTable from '../components/league/league-table';
import LeagueFixtures from '../components/league/league-fixture';


const Trophy = ({data}) => (
    <Layout>
        <LeagueTable entries={data.entries} />
        <hr />
        <LeagueFixtures fixtures={data.fixtures} />
    </Layout>
)

export default Trophy;

export const query = graphql`
    {
        entries: allStrapiEntry {
                    edges {
                        node {
                            name
                            played
                            points
                            shots_for
                            shots_against
                            pool
                        }
                    }
                }
        fixtures: allStrapiLeaguefixture {
            edges {
                node {
                  home_team
                  away_team
                  date
                  home_score
                  away_score
                  points
                }
              }
            }
        }
`