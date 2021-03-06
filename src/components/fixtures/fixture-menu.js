import React from "react"
import menuStyles from "./fixture-menu.module.scss"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const years = ["2019", "2020"]

const FixtureMenu = props => {
  return (
    <div className={`has-background-white-bis ${menuStyles.menuWrapper}`}>
      <aside className="menu">
        <p className="menu-label">Years</p>
        <ul className="menu-list">
          {years.map(year => {
            return (
              <li key={year}>
                <a
                  className={`${year === props.year ? "is-active" : ""}  `}
                  onClick={() => props.setYear(year)}
                >
                  {year}
                </a>
                {year === props.year && (
                  <MonthsList month={props.month} setMonth={props.setMonth} />
                )}
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}

const MonthsList = props => {
  return (
    <ul>
      {months.map(month => {
        return (
          <li key={month}>
            <a
              className={`${month === props.month ? "is-active" : ""}
                      
                      `}
              onClick={() => props.setMonth(month)}
            >
              {month}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default FixtureMenu
