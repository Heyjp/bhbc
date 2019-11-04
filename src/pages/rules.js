import React from 'react';
import Layout from '../components/layout.js';

const RuleBox = () => (
    <div className="column rule-wrap">
        <div className="box has-background-light">
            <h5 className="subtitle is-5 ">Rules</h5>
            <div className="content is-small">
                <ol type="1">
                    <li>
                        Within 7 days of a round commencing, the challenger (first name on the draw) should offer the opponent a 
                        minimum of three reasonable dates at least one of which must be a weekend. (This does not apply to the Drawn 
                        Mixed Triples)
                    </li>
                    <li>
                        Competitions may not be played on Club Nights.
                    </li>
                    <li>
                        In all Singles competitions, it is the challengers responsibility to arrange markers.
                        Except in the semi-finals and finals when markers are appointed by the Tournament committee.
                    </li>
                </ol>
            </div>
            <div>
                <p className="has-text-info">NB Please note the dress code for all club competitions - grey trousers / skirts and white / club tops must be worn. </p>
            </div>
        </div>
    </div>  
)

const Tabs = ({handleClick, ruleSet}) => {
    let rulesets = ['Club Competitions', 'Gladys Rowland', 'Edward Rowland']
    return (
        <div className="tabs is-small ">
            <ul className="is-marginless">
                {
                    rulesets.map((e) => {
                        return <li 
                                    className={`${ruleSet === e ? 'is-active' : ''}`}
                                    key={e}
                                    >
                                    <a onClick={(event) => handleClick(event, e)}>{e}</a>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}


const CompRules = ({ruleSet, handleClick}) => (
    <div className="column is-three-fifths comp-wrap">
        <Tabs handleClick={handleClick} ruleSet={ruleSet} />
        {ruleSet === 'Club Competitions' && <ClubCompetitions />}
        {ruleSet === 'Gladys Rowland' && <GladysRowland />}
        {ruleSet === 'Edward Rowland' && <EdwardRowland />}
    </div>
)


class RulesContainer extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            ruleSet: 'Club Competitions'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, value) {
        this.setState({
            ruleSet: value
        })
    }

    render () {
        return (
            <Layout>
                <div className="columns is-centered">
                    <div className="column is-four-fifths">
                    < section className = "hero" >
                        <
                        div className = "hero-body" >
                        <
                        div className = "container" >
                        <
                        h1 className = "title" >
                        Competition Rules <
                        /h1> <
                        /div> <
                        /div> <
                        /section> <
                        div className = "" >
                        <
                        section className = "content" >
                        <
                        div className = "columns" >
                        <
                        CompRules
                    ruleSet = {
                        this.state.ruleSet
                    }
                    handleClick = {
                        this.handleClick
                    }
                    /> <
                    RuleBox / >
                        <
                        /div> <
                        /section> <
                        /div>              
                    </div>
                </div>                    
            </Layout>
        )
    }

}


export default RulesContainer;

const ClubCompetitions = () => {
    return (
        <div className="">
            <h3 className="subtitle is-4">Ladies Competitions</h3>
            <div className="divSpacer">
                <p><strong>Ladies Maynard Chamionship </strong></p>
                <p>Play to 21 shots, 4 woods each  (Rule 3 applies) </p>
            </div>
            <div className="divSpacer">
                <p><strong>Ladies Two Woods </strong></p>
                <p>Play to 21 ends, 2 woods each - Only woods within one yard of jack score  (Rule 3 applies)</p>
            </div>
            <h3 className="subtitle is-4">Mens Competitions</h3>
            <div className="divSpacer">
                <p><strong>Mens Championship</strong></p>
                <p>Play to 21 shots, 4 woods each  (Rule 3 applies)</p>
            </div>
            <div className="divSpacer">
                <p><strong>Mens Two Woods</strong></p>
                <p>Play to 21 ends, 2 woods each - Only woods within one yard of jack score  (Rule 3 applies)
                </p>
            </div>
            <h3 className="subtitle is-4">Mixed Competitions</h3>
            <div className="divSpacer">
                <p><strong>Mixed Handicap</strong></p>
                <p>Play to 21 shots plus the handicap difference, 4 woods each   (Rule 3 applies)
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Mixed Oldland</strong></p>
                <p>Play to 21 ends, 2 woods each - Only woods within one yard of jack score  (Rule 3 applies)
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Veterans Cup (Mixed)</strong></p>
                <p>Play to 100 points, 4 woods each - Minimum age 60, points allocated 5, 3, 1 for nearest woods to jack  (Rule 3 applies)
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Centenary Cup</strong></p>
                <p>Best of 3 x 7 end sets, 4 woods each - Open only to first Match losers in the Men's and Ladies Championships  (Rule 3 applies)
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Drawn Pairs (Mixed)</strong></p>
                <p>Play to 21 ends, 4 woods each - substitutes arranged by the tournament committee
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Married Pairs</strong></p>
                <p>Play to 21 ends, 4 woods each 
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Drawn Triples (Mixed)</strong></p>
                <p>Play to 18 ends, 3 woods each - Fixed dates (unless a date is agreed prior to the fixed date) - substitutes arranged by the tournament committee 
                </p>
            </div>
            <div className="divSpacer">
                <p><strong>Australian Pairs (Mixed)</strong></p>
                <p>
                    Play to 18 ends, 4 woods each - Players alternate positions each end. woods played in a 2, then 4 then 2 sequence. substitutes arranged by the tournament committee
                </p>
            </div>
        </div>
    )
}

const EdwardRowland = () =>  (
    <div>
        <h1 className="title">The Edward Rowland Memorial Trophy</h1>
        <small>Tournament Controlled by this Club and open to invites - Tournament subject to Licence.</small>
        <h3 className="subtitle">Rules 2019</h3>
        <ol>
            <li>Bowls England Rules apply – all entrants must be Affiliated Clubs</li>
            <li> Invited Clubs may enter one or two men’s rinks.
                A player can only be named for one team.
                Each team will be regarded as a separate entry.
                Players to wear Greys in rounds and Whites on Finals Day.
            </li>
            <li>
                Two substitutes may be used providing they have not played for any other team.
            </li>
            <li>
                Games to be played on the outdoor ground of the first drawn team who are the challengers.
                They must offer three dates to their opponents, one of which to be a weekend, enabling the game to
                be played on or before the arranged date by mutual agreement between the clubs. Challengers not to ask for
                dates to play before 1st May, to allow greens to open.  Challengers to offer dates giving at least 48
                hours notice between contact and the offered playing dates.
            </li>
            <li>
                 Home team, being the challengers, will be responsible for the green fees or other charges for both teams in the game.
            </li>
            <li>
                Where a team does not report for play within thirty minutes of the  time arranged, the team present shall be entitled to claim  a walkover, providing there are no extenuating circumstances.  The decision of the Competition Committee to be
                final. 
            </li>
            <li>
                All games are 21 ends.  An extra end to be played in the case of a tie.
            </li>
            <li>
                 Semi-Finals  to be played at Burgess Hill on Saturday, 17th August, at 10.00 a.m.  If due to weather or green conditions will be re-arranged for Sunday, 18th August, at 10.00 a.m. The Final will be played at Burgess Hill on their Finals Day, Sunday, 1st September, 2019. 
            </li>
            <li>
                 Score cards to be signed by both skips.                   
                Winner to telephone results to the Competition Secretary on the day of play and post the cards first className.  First Game winning skips    MUST forward their name and telephone number when sending the result card.
            </li>
            <li>
                No rule to be altered without the consent of the Burgess Hill Bowls Club Competition Committee.
            </li>
            <li>
                Winning team to hold the Edward Rowland Memorial Trophy for one year.
            </li>
            <li>
                Prize Money will be paid to the Clubs of the winners and runners-up, and not to individual competitors.
            </li>
            <li>
                Entrance Fee £8 per team, payable with application.
            </li>
            <li>Competition Secretary – Mr. Mick Pollard</li>
        </ol>
    </div>
)

const GladysRowland = () => (
    <div>
        <h1 className="title">The Gladys Rowland Memorial Trophy</h1>
        <small>Tournament Controlled by this Club and open to invites - Tournament subject to Licence.</small>
        <h3 className="subtitle">Rules 2019</h3>
        <ol>
            <li>Bowls England Rules apply – all entrants must be Affiliated Clubs</li>
            <li> 
                Invited Clubs may enter one or two ladies’ rinks.
                A player can only be named for one team.
                Each team will be regarded as a separate entry.
                Players to wear Greys in rounds and Whites on Finals Day. 
            </li>
            <li>
                Two substitutes may be used providing they have not played for any other team.  
            </li>
            <li>
                Games to be played on the outdoor ground of the first drawn team who are the challengers. They must offer three dates to their
                opponents, one of which to be a weekend, enabling the game to be played on or before the
                arranged date by mutual agreement between the clubs.  Challengers not to ask for dates to play
                before 1st May, to allow greens to open.  Challengers to offer dates giving at least 48
                hours notice between contact and the offered playing dates. 
            </li>
            <li>
                Home team, being the challengers, will be responsible for the green fees or other charges for both teams
                in the game.         
            </li>
            <li>
                Where a team does not report for play within thirty minutes of the time arranged, the team present shall be entitled to claim a walkover, providing there are no extenuating circumstances.  The decision  of the Competition Committee to be final. 
            </li>
            <li>
                All games are 21 ends.  An extra end to be played in the case of a tie. 
            </li>
            <li>
            Semi-Finals to be played at Burgess Hill on Saturday, 17th August, at 10.00 a.m.  If due to weather or green conditions will be re-arranged for Sunday, 18th August, at 10.00 a.m.   The Final will be played at Burgess Hill on their Finals Day, Sunday, 1st September, 2019.
            </li>
            <li>
                Score cards to be signed by both skips. Winner to telephone results to the Competition Secretary on the day of play and post the cards first className.  First Game winning skips MUST forward their name and telephone number when sending the result card. 
            </li>
            <li>
                No rule to be altered without the consent of the Burgess Hill Bowls Club Competition Committee. 
            </li>
            <li>
                Winning team to hold the Gladys Rowland Memorial Trophy for one year. 
            </li>
            <li>
                Prize Money will be paid to the Clubs of the winners and runners-up, and not to individual  competitors. 
            </li>
            <li>
                Entrance Fee £8 per team, payable with application.
            </li>
            <li>
                Competition Secretary – Mrs. Joan Howson,  Brijo, 31 St. Wilfrid’s Road , Burgess Hill . West Sussex  RH15 8BE
            </li>
        </ol>
    </div>
)