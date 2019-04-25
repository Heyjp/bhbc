import React from 'react';
import tournamentStyles from './tournament.module.scss';

// let matches = ["one", "two", "three", "four"];

const Match = (props) => (
    <ul className={tournamentStyles.playerList}>
        <li className={tournamentStyles.player}>{props.team_a}</li>
        <li className={tournamentStyles.player}>{props.team_b}</li>
    </ul>
)

// const Bye = () => (
//     <div style={{'height': '38px'}}>
//         <div></div>
//         <div></div>
//     </div>
// )

const RoundTitle = (props) => (
    <div className={tournamentStyles.title}>
        <h5 className={tournamentStyles.titleText}>{props.round === 1 ? "Finals" : `Round ${props.round}` }</h5>
    </div>
)

const Round = (props) =>  {
    
    const matches = [];

    for (let i = 0; i < props.teams; i++) {
        matches.push(<Match team_a="a" team_b="b" key={i} />)
    }

    return (
        <div className={tournamentStyles.round}>
            <RoundTitle round={props.round}/>
            <div className={tournamentStyles.matchwrap}>
                {
                    matches
                }
            </div>
        </div>
    )
}


const TournamentContainer = (props) => (
    <div style={{'width': '100%'}}>
        <div className="columns">
            <div className="column">
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



// function createPrelims (prelimMatches, nextRoundLength) {
//     let prelimArray = [];
//     // Creating a flex div with double the entries of the first round so items will align
//     const TOTAL_MATCHES = nextRoundLength * 2;
    
//     for (let i=0; i < nextRoundLength; i++) {
//         prelimArray.push(<Bye />);
//     }

//     // Swap out Bye's with prelim rounds
//     let matchesToIndex = prelimMatches.map((match) => {
//         return match.prelimIndex;
//     })

//     return prelimArray.map((bye, index) => {
        
//         // Replace with the match else return the bye
//         if (matchesToIndex.includes(index)) {
//             return <Match />
//         }

//         return bye;
//     })
// }

const createRounds = (tournament) => {
    console.log(tournament, 'this is tournament');
    const { matches, title, total_teams } = tournament;
    const maxTeams = [64, 32, 16, 8, 4, 2];
    let teamIndex = maxTeams.findIndex((e) => total_teams >= e);

    let roundsArray = [];
    let rounds = divByTwo(total_teams, 2);

    // for (let i = 1; i <= rounds; i++) {
    //     let filteredMatches = matches.filter((match) => {
    //         return match.round === i;
    //     });
    //     roundsArray.push(<Round 
    //         matches={filteredMatches} 
    //         key={`key${i}`}
    //         round={i}
    //         />);
    // }

    for (let i = teamIndex; i < maxTeams.length; i++) {
        roundsArray.push(<Round 
                    key={`key${i}`}
                    round={maxTeams[i]/2}
                    teams={maxTeams[i]/2}
                    />);
    }
    return roundsArray;
}

// function getRounds (teams) {
   
    
//     // Need to work out how many rounds there needs to be from the max amount of teams
//     // search through array and compare
//         // Tournament total_teams
//         // maxTeams 

//     let bracketSize = maxTeams.findIndex((e) => {
//             return total_teams >= e;
//         });

//     32 // 2
    
//     // use modulo to figure out whether it is a perfect size bracket or 
//     // there needs to be prelims
    
//     // either return 

//     // keep dividing total teams by 2, return amount of times ran 
//     //  for the total amount of rounds
//     return 
// }

function divByTwo (a,b = 2, index = 1) {
	let ans = a / b;	
    if (ans <= 1) return index;
 	return divByTwo(ans, 2, index+1);
}



/*

TODOS ================================
======================================

1) Display Rounds


export default () => (
    <div className={tournamentStyles.container}>
    <div className={tournamentStyles.round}>
                <RoundTitle title="Round 1"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Bye />
                    <Match />
                    <Bye />
                    <Bye />
                    <Bye />
                    <Bye />
                    <Match />
                    <Bye />
                    <Bye />
                    <Bye />
                    <Match />
                    <Match />
                    <Bye />
                    <Bye />
                    <Match />
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Round 1"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Round 2"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Round 3"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Finals"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                </div>
            </div>
    </div>
)







*/