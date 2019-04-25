import React from 'react';
import menuStyles from './events.menus.module.scss'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const years = ["2018", "2019"];

const EventsMenu = (props) => {
    return (
      <div className={menuStyles.menuWrapper}>
        <aside className="menu">
            <p className="menu-label">
                Years
            </p>
            <ul className="menu-list">
                {years.map((year) => {          
                    return (
                      <li key={year}>
                        <button 
                          className={`${year === props.year 
                          ? "is-active" 
                          : ""} button is-outlined `}
                          onClick={() => props.setYear(year)}
                          >
                          {year}
                        </button>
                        {year === props.year 

                          && <MonthsList 
                                month={props.month}
                                setMonth={props.setMonth}
                        />}
                      </li>
                    )  
                    }
                )}
            </ul>
        </aside>
      </div>
    )
}


const MonthsList = (props) => {
    return (
        <ul>
            {months.map((month) => {
              return (
                <li key={month}>
                  <button
                    className={`${month === props.month 
                      ? "is-active" 
                      : ""}
                      button is-outlined is-fullwidth
                      `}
                    onClick={() => props.setMonth(month)}>
                    {month}
                  </button>
                </li>
              )
            })
          }
        </ul>
    )
}

export default EventsMenu;