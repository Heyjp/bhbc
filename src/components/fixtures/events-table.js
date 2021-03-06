import React from "react"
import tableStyles from "./fixture-table.module.scss"
import Moment from "moment"

const Fixture = ({ fixture, fixture: { date } }) => {
  var d = new Date(fixture.date);
  var n = d.getTimezoneOffset();
  return (
  <div className="box">
    <div>
      <div className="social-box">
        <div class="date-wrap">
          <DateBox date={fixture.date} />
        </div>
        <div className="description-wrap">
          <FixtureDescription
            name={fixture.title}
            description={fixture.description}
          />
        </div>
      </div>
    </div>
    <hr className={tableStyles.hBreak} />
    <TimeFooter date={date} />
  </div>
)}

const TimeFooter = ({date}) => {
  const newDate = new Date(date)
  const offset = newDate.getTimezoneOffset()
  const time = Moment(newDate)
    .utcOffset(0)
    .format('HH:mm')
  return (
    <p className="heading is-marginless">
      Start time:
      <span className="has-text-weight-semibold">
        {time}
      </span>
    </p>
  )
}

const DateBox = ({ date }) => {
  const newDate = new Date(date)
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
  return (
    <div className={tableStyles.dateBoxWrap}>
      <h5 className="subtitle is-7 is-marginless">
        {days[newDate.getDay()].toUpperCase()}
      </h5>
      <h2 className="subtitle is-3 is-marginless">{newDate.getDate()}</h2>
    </div>
  )
}

const FixtureDescription = ({ name, description }) => (
  <div className={tableStyles.descWrap}>
    {/* <p className="heading">Opponent</p> */}
    <h1 className={`has-text-weight-semibold`}>{name}</h1>
    <p className="is-family-secondary heading">{description}</p>
    {/* <EventTags /> */}
  </div>
)

const Pagination = ({ length, setPage, page }) => {
  let pages = []

  let pageIndex = 0
  let index = 0

  while (index < length) {
    pages.push(pageIndex)
    pageIndex++
    index += 5
  }

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        className="pagination-previous"
        title="This is the first page"
        disabled={page === pages[0]}
        onClick={() => {
          if (page === pages[0]) {
            return false
          }
          return setPage(page - 1)
        }}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        disabled={page === pages[pages.length - 1]}
        onClick={() => {
          if (page === pages[pages.length - 1]) {
            return false
          }
          return setPage(page + 1)
        }}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pages.map(item => {
          return (
            <li key={`page-link${item}`}>
              <a
                className={`pagination-link 
                                    ${item === page ? "is-current" : ""}`}
                aria-label={`Page ${item}`}
                aria-current="page"
                onClick={() => setPage(item)}
              >
                {item + 1}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ({ fixtures, year, month, setPage, page, totalFixtures }) => {
  return (
    <div className="columns" style={{ width: "70%", maxWidth: "70%" }}>
      <div className="column is-full">
        <section className="events-main">
          <h1 className="subtitle is-6">Social Events for {year}</h1>
          <h1 className="subtitle is-2">{month}</h1>
          <hr />
          {fixtures.map(({ node }, index) => {
            return <Fixture key={node.id} fixture={node} />
          })}
          {!fixtures.length && <p>Currently no fixtures</p>}
          {totalFixtures > 5 && (
            <Pagination setPage={setPage} page={page} length={totalFixtures} />
          )}
        </section>
      </div>
    </div>
  )
}
