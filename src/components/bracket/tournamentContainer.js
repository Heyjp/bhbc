import React from 'react';
import tournamentStyles from './tournament.module.scss';
import TournamentHero from './tournamentHero';


const MatchHeader = (props) => {
    return (
        <div className={`${tournamentStyles.matchHeader}`}>
            <p className="has-text-weight-semibold has-text-info">G{props.matchNum}</p>
        </div>
    )
}


const Match = (props) => {
    return (
        <div className={`${tournamentStyles.matchContainer}`}>
            <MatchHeader matchNum={props.matchNum} />
            <ul className={tournamentStyles.playerList}>
                <li className={`has-background-white-ter has-text-weight-semibold ${tournamentStyles.player}`}>{props.challenger}</li>
                <li className={`has-background-grey-lighter has-text-weight-semibold ${tournamentStyles.player}`}>{props.opponent}</li>
            </ul>
        </div>
    )
}

const Bye = () => (
    <div className={`${tournamentStyles.byeWrap}`}>
        <div></div>
        <div></div>
    </div>
)

const RoundTitle = (props) => {
    let { round } = props;
    
    if (props.semiFinals) {
        round = 'Semi Finals'
    } else if (props.finals) {
        round = "Finals"
    }

   return (
        <div className={`subtitle is-4 ${tournamentStyles.title}`}>
            <h5 className={tournamentStyles.titleText}>{`${isNaN(round) ? round : `Round ${round}`}` }</h5>
        </div>
    )
}

const Round = (props) =>  {
    const { totalTeams, round, matches, prelim = false } = props;

    const filteredMatches = matches.filter((match) => {

        if (prelim) {
            return match.round === 0;
        }

        return match.round === round;
    });
    const matchArray = populateRound(totalTeams, filteredMatches, prelim);

    return (
        <div className={tournamentStyles.round}>
            <RoundTitle round={round} seminFinals={props.semiFinals} finals={props.finals} />
            <div className={tournamentStyles.matchwrap}>
                { matchArray }
            </div>
        </div>
    )
}

const TournamentContainer = (props) => (
    <div style={{'width': '100%'}}>
        <TournamentHero />
        <hr style={{'width': '80%', 'marginLeft': 'auto', 'marginRight': 'auto'}} />
        <div className="columns is-centered">
            <div className="column is-four-fifths is-full-mobile">
                <div className={tournamentStyles.container}>
                    {
                        props.tournament && createRounds(props.tournament)
                    }
                </div>
            </div>
        </div>
    </div>
);


export default TournamentContainer;

function createPrelims (totalMatches, matches, prelimMatchLength) {
    let prelimArray = new Array(totalMatches).fill(null)

    if (!matches) {
        return prelimArray.map((e, i) => <Bye key={`prelim${i}`} />);
    }

    // Create an array of matches and byes
    return prelimArray.map((e, index) => {
        // see if there is a match num
        let match = matches.find((match) => match.match_number === index+1);
        // if there is a "match" enter details else return an empty match
        if (match) {
            let {challenger = "TBC", round, match_number = index+1, opponent="TBC" } = match;
            return (<Match challenger={challenger} 
                    opponent={opponent} 
                    key={`prelim${index}`} 
                    round={round}
                    matchNum={match_number}
                />)
        } else if (index < prelimMatchLength) {
            return (<Match  key={`prelim${index} `} matchNum={index+1}/>)
        }

        

        return <Bye key={`prelim${index}`} />
    });
}

function populateRound (totalTeams, matches, prelim) {
    if (prelim) {
        return createPrelims(totalTeams, matches, prelim);
    }

    // Fill an array with Match elements
    let matchArray = new Array(totalTeams).fill(null)
        .map((e, i) => {
            // see if there is a match num
            let match = matches.find((match) => match.match_number === i+1);
            // if there is a "match" enter details else return an empty match
            if (match) {
                let {challenger = "TBC", round, match_number = i+1, opponent="TBC" } = match;
                return (<Match challenger={challenger} 
                        opponent={opponent} 
                        key={i} 
                        round={round}
                        matchNum={ match_number}
                    />)
            }
            return <Match key={i} matchNum={i+1} />
        })
    

    return matchArray;
}

const createRounds = (tournament) => {
    const { Matches: matches, total_teams, title } = tournament;
    let isPrelim = false;

    // Work out whether there is a perfect bracket size or not
    const maxTeams = [64, 32, 16, 8, 4, 2];
    let teamIndex = maxTeams.findIndex((e) => total_teams >= e);

    // if total_teams is not equal to the closest perfect bracket size
    // prelim round is needed
    if (total_teams !== maxTeams[teamIndex]) {
        isPrelim = true;
    }

    // Create an array to hold all the rounds
    let roundsArray = [];
    // declare how many rounds necessary for the tournament
    // let rounds = divByTwo(total_teams, 2);

    if (isPrelim) {
        let prelimMatches = total_teams - maxTeams[teamIndex];
        roundsArray.push(
            <Round 
                key={`key0`}
                round={"Prelim"}
                totalTeams={maxTeams[teamIndex-1]/2}
                prelim={prelimMatches}
                matches={matches}
                totalMatches={total_teams}
            />
        );
    }

    
    let round = 1;
    for (let i = teamIndex; i < maxTeams.length; i++) {       
        roundsArray.push(<Round 
                            key={`key${i}`}
                            round={round}
                            totalTeams={maxTeams[i]/2}
                            matches={matches}
                            semiFinals={i === maxTeams.length - 2 ? true : false}
                            finals={i === maxTeams.length - 1 ? true : false }
                        />);
        round++;
    }
    return roundsArray;
}

