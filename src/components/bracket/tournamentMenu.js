import React from 'react';

const CompsMenu = (props) => {
    const { tournament, tournaments, setTournament } = props;
    return (
      <div className="menu-wrap has-background-white-bis">
        <aside className="menu ">
            <p className="menu-label">
                Club Competitions
            </p>
            <ul className="menu-list">
                {tournaments.map((comp, index) => {     
                    const { title } = comp;     
                    return (
                      <li key={`comp-${index}`}>
                        <button
                            href="#"
                          className={title === tournament
                            ? "is-active" 
                            : ""}
                          onClick={()=> { 
                              setTournament(title)
                          }
                        }
                        
                        >{title}</button>
                      </li>
                    )  
                    }
                )}
            </ul>
        </aside>
      </div>
    )
}

export default CompsMenu;
