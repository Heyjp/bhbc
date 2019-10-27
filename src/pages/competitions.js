import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

import Tournament from "../components/bracket/tournamentContainer.js"
import TournamentMenu from '../components/bracket/tournamentMenu.js';

class TournamentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tournament: ''
    }

    this.setTournament = this.setTournament.bind(this);
  }

//   setComp (comp) {
//     return this.setState({
//         comp: comp === this.state.comp ? '' : comp
//     })
//   }

  setTournament (tourny) {
      return this.setState({
          tourny: tourny === this.state.tourny ? "" : tourny
      })
  }

  render() {
    const { tournament } = this.props.data;

    const tournaments = tournament.edges.map(({node}) => node);
    
    const selectTournament = tournaments.find((ele) => {
      return ele.title === this.state.tourny  
    })

    return (
      <Layout>
        <div className="events-wrapper">
          <TournamentMenu 
            tournaments={tournaments} 
            setTournament={this.setTournament}
            tournament={this.state.tourny}
           />
          <Tournament tournament={selectTournament} />
        </div>
      </Layout>
    )
  }
} 



export default TournamentContainer;


export const pageQuery = graphql`
 { 
    tournament: allStrapiTournament {
      edges {
        node {
          title
          rounds
          total_teams
          Matches {      
            round
            challenger
            opponent
            match_number
          }
        }
      }
    }
  }
`