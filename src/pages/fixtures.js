import React from 'react';
import Layout from "../components/layout"
import Moment from 'moment';
import {graphql} from 'gatsby';


import Fixtures from '../components/fixtures/fixture-table.js';
import FixturesMenu from '../components/fixtures/fixture-menu.js';

class FixturesWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            year: '',
            month: '',
            filter: false,
            page: 1
        }

        this.toggleMenu = false;
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.setYear = this.setYear.bind(this);
        this.setMonth = this.setMonth.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {

        const year = Moment().format('YYYY');
        const month = Moment().format('MMMM');

        return this.setState({
            month,
            year
        })
    }

    menuToggle = () => {

        this.setState({
            toggleMenu: !this.toggleMenu
        })
    }

    setYear (year) {
        return this.setState({
            year: year === this.state.year ? "" : year,
        })
    }

    setMonth (month) {
        return this.setState({
            month: month === this.state.month ? "" : month,
        })
    }

    setPage (page) {

        if (page === this.state.page) {
            return false;
        }

        return this.setState({
            page
        })
    }
    
    render() {
        
        let fixtures = this.props.data.allStrapiFixture.edges.slice()
            .filter(({node}) => {
                const date = new Date(node.date);
                const year = Moment(date).format('YYYY');
                const month = Moment(date).format('MMMM');

                return year === this.state.year && month === this.state.month;
            })
        let totalFixtures = fixtures.length;

        if (totalFixtures > 5) {
            fixtures = fixtures.slice(this.state.page - 1, this.state.page + 4);
        }
        
        

        return (
            <Layout>
                <div className="events-wrapper main-content wrap">
                    <FixturesMenu  
                        setMonth={this.setMonth}
                        setYear={this.setYear}
                        year={this.state.year}
                        month={this.state.month}
                    />
                    <Fixtures 
                        fixtures={fixtures}
                        year={this.state.year}
                        month={this.state.month}
                        page={this.state.page}
                        setPage={this.setPage}
                        totalFixtures={totalFixtures}
                    />
                </div>
            </Layout>
        )
    }
}

export default FixturesWrapper;

export const fixturesQuery = graphql`
  query EventsQuery {
    allStrapiFixture {
      edges {
        node {
          id
          date
          opponent
          match
          dress
          match_type
          venue
          teams
        }
      }
    }
  }
`