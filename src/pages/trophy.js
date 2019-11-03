import React from 'react'
import Layout from '../components/layout.js';
import { graphql } from 'gatsby';

import LeagueTable from '../components/league/league-table';
import LeagueFixtures from '../components/league/league-fixture';


const League = ({data}) => {
    const league = data.allStrapiLeague.edges[0];
    const { node } = league;
    const { entries, fixture } = node;
    return (
        <Layout>
            <LeagueTable entries={entries} />
            <hr />
            <LeagueFixtures fixtures={fixture} />
        </Layout>
    )
}

export default League;

export const query = graphql`
    {
        allStrapiLeague {
            edges {
                node {
                    id
                    fixture {
                        home_team
                        away_team
                        date
                        home_score
                        away_score
                        points
                    }
                    entries {
                        team_name
                        pool
                        played
                        points
                        shots_for
                        shots_against
                    }
                }
            }
        }
    }
`