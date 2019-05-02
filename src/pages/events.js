import React from 'react';
import Layout from "../components/layout"
import Moment from 'moment';
import {graphql} from 'gatsby';


import Events from '../components/events/events-table.js';
import EventsMenu from '../components/events/events.menus.js';

class EventsWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            year: '',
            month: '',
            filter: false
        }

        this.toggleMenu = false;
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.setYear = this.setYear.bind(this);
        this.setMonth = this.setMonth.bind(this);
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
            filter: !this.filter
        })
    }

    setMonth (month) {
        return this.setState({
            month: month === this.state.month ? "" : month,
            filter: !this.filter
        })
    }
    
    render() {
        const events = this.props.data.allStrapiFixture.edges.filter(({node}) => {
            const date = new Date(node.date);
            const year = Moment(date).format('YYYY');
            const month = Moment(date).format('MMMM');

            return year === this.state.year && month === this.state.month;
        })

        return (
            <Layout>
                <div className="events-wrapper main-content wrap">
                    <EventsMenu  
                        setMonth={this.setMonth}
                        setYear={this.setYear}
                        year={this.state.year}
                        month={this.state.month}
                    />
                    <Events 
                        events={this.state.filter 
                            ? events 
                            : this.props.data.allStrapiFixture.edges
                        }
                        year={this.state.year}
                        month={this.state.month}
                    />
                </div>
            </Layout>
        )
    }
}

export default EventsWrapper;

export const eventsQuery = graphql`
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
          format
        }
      }
    }
  }
`