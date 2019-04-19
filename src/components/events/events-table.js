import React from 'react';
import tableStyles from './events-table.module.scss'

const EventItem = ({event}) => (
        <div className="box">
            <div className="level is-marginless">
                <div className="level-left">
                    <div className="level-item">
                        <DateBox date={event.date} />
                    </div>
                    <div className="level-item">
                        <EventDescription 
                            name={event.opponent} 
                         />
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading has-text-weight-bold">Location</p>    
                            <p className="heading">{event.venue}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{event.match}</p>
                            <p className="heading">{event.match_type}</p>

                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">{event.format || 'Mixed'}</p>
                        </div>
                    </div>
                    <div className="level-item">
                        <div>
                            <p className="heading">Result</p>
                            {event.Result && <p className="title is-5">{event.result}</p>}
                            {!event.Result && <p className="title is-5">TBC</p>}
                        </div>
                    </div>
                </div>
            </div>
            <hr className={tableStyles.hBreak} />

            <p className="heading is-marginless">Start time:
                <span className="has-text-weight-semibold">
                    { "14:00" || new Date(event.date).toLocaleTimeString() }
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

const EventDescription = ({name, description}) => (
    <div className={tableStyles.descWrap}>
        <p className="heading">Opponent</p>
        <h1 className={`has-text-weight-semibold`}>{name}</h1>
        {/* <EventTags /> */}
    </div>
)

// const EventTags = () => (
//     <div className="tags are-small">
//         <span className="tag is-primary">Home</span>
//         <span className="tag is-info">Triples</span>
//         <span className="tag is-warning">Mixed</span>
//         <span className="tag is-success">Medium</span>
//     </div>
// )


export default ({events, year, month}) => {
    console.log(events, 'this is events')
    return (
            <div className="columns" style={{'width': '70%', 'maxWidth': '70%'}}> 
                <div className="column is-full">
                    <section className="events-main">
                        <h1 className="subtitle is-6">Fixtures for {year}</h1>
                        <h1 className="subtitle is-2">{month}</h1>
                        <hr />
                        {
                            events.map(({node}) => {
                                return (
                                    <EventItem key={node.id} event={node} />
                                )
                            }) 
                        }
                        {!events.length && <p>Currently no events</p>}
                    </section>
                </div>
            </div>
    )
}