import React from 'react';
import tableStyles from './fixture-table.module.scss'

const Fixture = ({fixture}) => (
        <div className="box">
            <div className="level is-marginless">
                <div className="level-left">
                    <div className="level-item">
                        <DateBox date={fixture.date} />
                    </div>
                    <div className="level-item">
                        <FixtureDescription 
                            name={fixture.opponent} 
                         />
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading has-text-weight-bold">Location</p>    
                            <p className="heading">{fixture.venue}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{fixture.match}</p>
                            <p className="heading">{fixture.match_type}</p>

                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">{fixture.teams || 'Mixed'}</p>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">Result</p>
                            {fixture.Result && <p className="title is-5">{fixture.result}</p>}
                            {!fixture.Result && <p className="title is-5">TBC</p>}
                        </div>
                    </div>
                </div>
            </div>
            <hr className={tableStyles.hBreak} />

            <p className="heading is-marginless">Start time:
                <span className="has-text-weight-semibold">
                    { "14:00" || new Date(fixture.date).toLocaleTimeString() }
                </span>
             </p>
        </div>
)

const DateBox = ({date}) => {
    const newDate = new Date(date);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]
    return (
        <div className={tableStyles.dateBoxWrap}>
            <h5 className="subtitle is-7 is-marginless">{days[newDate.getDay()].toUpperCase()}</h5>
            <h2 className="subtitle is-3 is-marginless">{newDate.getDate()}</h2>
        </div>
    )
}

const FixtureDescription = ({name, description}) => (
    <div className={tableStyles.descWrap}>
        <p className="heading">Opponent</p>
        <h1 className={`has-text-weight-semibold`}>{name}</h1>
        {/* <EventTags /> */}
    </div>
)


export default ({fixtures, year, month}) => {
    return (
            <div className="columns" style={{'width': '70%', 'maxWidth': '70%'}}> 
                <div className="column is-full">
                    <section className="events-main">
                        <h1 className="subtitle is-6">Fixtures for {year}</h1>
                        <h1 className="subtitle is-2">{month}</h1>
                        <hr />
                        {
                            fixtures.map(({node}) => {
                                return (
                                    <Fixture key={node.id} fixture={node} />
                                )
                            }) 
                        }
                        {!fixtures.length && <p>Currently no fixtures</p>}
                    </section>
                </div>
            </div>
    )
}