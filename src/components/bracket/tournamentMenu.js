import React from 'react';

const CompsMenu = (props) => {
    return (
      <div className="menu-wrap">
        <aside className="menu">
            <p className="menu-label">
                Club Competitions
            </p>
            <ul className="menu-list">
                {props.comps.map((comp, index) => {          
                    return (
                      <li key={`comp-${index}`}>
                        <a 
                          
                          onClick={()=> { props.setComp(comp.Name)}}
                        
                        >{comp.Name}</a>
                        {comp.Name === props.comp
                           && <TournyList
                            tourny={props.tourny}
                            tournys={comp.tournaments}
                            setTourny={props.setTourny}
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

const TournyList = (props) => {

  return (
      <ul>
          {props.tournys && props.tournys.map((tourny) => {
            return (
              <li key={tourny.title}>
                <a 
                  className={tourny.title === props.tourny 
                    ? "is-active" 
                    : ""}
                  onClick={() => props.setTourny(tourny.title)}>
                  {tourny.title}
                </a>
              </li>
            )
          })
        }
      </ul>
  )
}

export default CompsMenu;
