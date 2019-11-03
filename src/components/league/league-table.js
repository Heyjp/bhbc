import React from 'react';

const LeagueTable = ({entries}) => {
    const ROUNDS = [1, 2, 3, 4];
    let pools = [];
    // Create an array of all rounds
    ROUNDS.forEach((round) => {
        // 
        let pool = createPools(entries, round);       
        return pools.push(pool);
    })

    return (
        <div className="container league-table-container">
            <div className="columns is-centered"> 
                <div className="column is-four-fifths ">
                <div className="trophy-header">               
                    <h2 className="title is-2 has-text-centered has-text-weight-light">Nicholas Soames Trophy</h2>
                </div>
                <h4 className="subtitle is-4">League Table</h4>
                <table className="table is-bordered is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <td><abbr title="Team">TM</abbr></td>
                            <td><abbr title="Played">PLD</abbr></td>
                            <td><abbr title="Points">PTS</abbr></td>
                            <td><abbr title="Shots For">SF</abbr></td>
                            <td><abbr title="Shots Against">SA</abbr></td>
                            <td><abbr title="Shot Difference">SD (+/-)</abbr></td>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td><abbr title="Team">TM</abbr></td>
                            <td><abbr title="Played">PLD</abbr></td>
                            <td><abbr title="Points">PTS</abbr></td>
                            <td><abbr title="Shots For">SF</abbr></td>
                            <td><abbr title="Shots Against">SA</abbr></td>
                            <td><abbr title="Shot Difference">SD (+/-)</abbr></td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr >
                            <td className="has-text-weight-semibold has-background-primary" colSpan="6">Pool 1</td>
                        </tr>                    
                        { pools[0] }
                        <tr>
                            <td className=" has-text-weight-semibold has-background-primary" colSpan="6">Pool 2</td>
                        </tr> 
                        { pools[1] }
                        <tr>
                            <td className="has-text-weight-semibold has-background-primary" colSpan="6">Pool 3</td>
                        </tr> 
                        { pools[2] }
                        <tr>
                            <td className="has-text-weight-semibold has-background-primary" colSpan="6">Pool 4</td>
                        </tr>
                        { pools[3] } 
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default LeagueTable;


const createPools = (teams, round) => {
    // take all the teams and return only those with pool
    const pool = teams
    .filter((team) => {
        return team.pool === round;
    })
    .sort((a, b) => {
        return b.points - a.points;
    })
    .map((team, index) => {
            return ( 
                <tr key={team.team_name}>
                    <td className={`${index < 1 ? "has-text-weight-semibold" : ''}`}>
                        {team.team_name}
                    </td>
                    <td>
                        {team.played}
                    </td>
                    <td>
                        {team.points}
                    </td>
                    <td>
                        {team.shots_for}
                    </td>
                    <td>
                        {team.shots_against}
                    </td>
                    <td>
                        { team.shots_for >= team.shots_against 
                            ? `+${team.shots_for - team.shots_against}`
                            : `${team.shots_for - team.shots_against}`
                        }
                    </td>
                </tr>
                    
            )
        })
    
    return pool;
}