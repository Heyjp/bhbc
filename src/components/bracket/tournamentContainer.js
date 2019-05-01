import React from 'react';
import tournamentStyles from './tournament.module.scss';



const MatchHeader = (props) => {
    console.log(props.matchNum, 'this is matchNUm')
    return (
    <div className={`${tournamentStyles.matchHeader}`}>
        <p className="has-text-info">G{props.matchNum}</p>
    </div>
    )
}


const Match = (props) => {
    return (
        <div className={`${tournamentStyles.matchContainer}`}>
            <MatchHeader matchNum={props.matchNum} />
            <ul className={tournamentStyles.playerList}>
                <li className={`has-background-white-ter has-text-weight-semibold ${tournamentStyles.player}`}>{props.challenger || ''}</li>
                <li className={`has-background-grey-lighter has-text-weight-semibold ${tournamentStyles.player}`}>{props.opponent || ''}</li>
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
        <div className={`subtitle is-6 ${tournamentStyles.title}`}>
            <h5 className={tournamentStyles.titleText}>{`${isNaN(round) ? round : `Round ${round}`}` }</h5>
        </div>
    )
}

const Round = (props) =>  {
    const { totalTeams, round, matches, prelim = false } = props;
    const filteredMatches = matches.filter((match) => {

        if (prelim) {
            return match.round === "prelim";
        }

        return match.round === round.toString();
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
        <div className="columns is-centered">
            <div className="column is-four-fifths is-full-mobile">
                <div className={tournamentStyles.container}>
                    {
                        props.tournys && createRounds(props.tournys)
                    }
                </div>
            </div>
        </div>
    </div>
);


export default TournamentContainer;

// function divByTwo (a,b = 2, index = 1) {
// 	let ans = a / b;	
//     if (ans <= 1) return index;
//  	return divByTwo(ans, b, index+1);
// }

function createPrelims (totalMatches, matches, prelimMatchLength) {

    let prelimArray = new Array(totalMatches).fill(null)

    if (!matches) {
        return prelimArray.map((e, i) => <Bye key={`prelim${i}`} />);
    }

    // Create an array of matches and byes
    
       return prelimArray.map((e, index) => {
            // see if there is a match num
            console.log(matches, 'this is matches')
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
    const { matches, total_teams } = tournament;
    console.log(matches, 'this is matches on create round')
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

