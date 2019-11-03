import React from 'react';
import tableStyles from '../fixtures/fixture-table.module.scss'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Fixture = ({fixture}) => (
        <div className="box">
            <div className="level is-marginless">
                <div className="level-left">
                    <div className="level-item">
                        <DateBox date={fixture.date} />
                    </div>
                    <div className="level-item">
                        <FixtureDescription 
                            home={fixture.home_team} 
                            away={fixture.away_team}
                         />
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <div>
                            <p className="heading">Result</p>
                            {fixture.home_score && fixture.away_score && <p className="title is-5">{`${fixture.home_score} - ${fixture.away_score}`}</p> }    
                            {!fixture.home_score && <p className="title is-5">TBC</p>}
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">Points</p>
                                <p className="title is-5">{fixture.points}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)

const DateBox = ({date}) => {
    const newDate = new Date(date);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]
    return (
        <div className={tableStyles.dateBoxWrap}>
            <h5 className="title is-6  has-text-info is-marginless has-text-weight-bold">{monthNames[newDate.getMonth()]}</h5>
            <h5 className="subtitle is-7 is-marginless">{days[newDate.getDay()].toUpperCase()}</h5>
            <h2 className="subtitle is-3 is-marginless">{newDate.getDate()}</h2>
        </div>
    )
}

const FixtureDescription = ({home, away}) => (
    <div className={tableStyles.descWrap}>
        <p className="heading">Match</p>
        <h1 className={`has-text-weight-semibold`}>{`${home} vs ${away}`}</h1>
    </div>
)


export default ({fixtures, year, month}) => {
    return (
        <div className="container">
            <div className="columns is-centered"> 
                <div className="column is-four-fifths ">
                    <h4 className="subtitle is-4">League Fixtures</h4>

                    <div className="league-fixture-wrap">                        
                    {
                            fixtures.map((fixture) => {
                                return (
                                    <Fixture key={fixture.home_team + fixture.away_team} fixture={fixture} />
                                )
                            }) 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}