import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

import Tournament from "../components/bracket/tournamentContainer.js"
import TournamentMenu from '../components/bracket/tournamentMenu.js';

class TournamentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comp: '',
      tourny: ''
    }

    this.setComp = this.setComp.bind(this);
    this.setTournament = this.setTournament.bind(this);
  }

  setComp (comp) {
    console.log('this is comp', comp);
    return this.setState({
        comp: comp === this.state.comp ? '' : comp
    })
  }

  setTournament (tourny) {
    console.log(tourny, 'this is settourny')
      return this.setState({
          tourny: tourny === this.state.tourny ? "" : tourny
      })
  }

  render() {
    const {competition, tournament } = this.props.data;
    
    const comps = competition.edges.map(({node}) => {
      return node;
    })

    const tournaments = tournament.edges.map(({node}) => {
      return node;
    }).find((ele) => {

      return ele.title === this.state.tourny
      
    })

    return (
      <Layout>
        <div>
            <h1>About with Container</h1>
            <p>With CSS Modules</p>
        </div>
        <div className="events-wrapper">
          <TournamentMenu 
            comps={comps} 
            setComp={this.setComp}
            setTourny={this.setTournament}
            tourny={this.state.tourny}
            comp={this.state.comp}
           />
          <Tournament tournys={tournaments} />
        </div>
      </Layout>
    )
  }
} 



export default TournamentContainer;


export const pageQuery = graphql`
 { 
   
    competition: allStrapiCompetition {
      edges {
        node {
          Name 
          tournaments {
            title
          }
        }
      }
    }
    tournament: allStrapiTournament {
      edges {
        node {
          title
          rounds
          total_teams
          matches {
            team_one
            team_two
            title
            round
          }
        }
      }
    }
  }
`