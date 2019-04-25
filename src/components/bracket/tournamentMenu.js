import React from 'react';

const competitions = ['Ladies Maynard', 'Mens Championship', 'Oldlands', 'Vets', 'Ladies 2 Woods'];
// const tournys = ["2018", "2019"];

const CompsMenu = (props) => {
    return (
      <div>
        <aside className="menu">
            <p className="menu-label">
                Club Competitions
            </p>
            <ul className="menu-list">
                {props.comps.map((comp, index) => {          
                    return (
                      <li key={`comp-${index}`}>
                        <button 
                          className="button is-outlined"
                          onClick={()=> { props.setComp(comp.Name)}}
                        
                        >{comp.Name}</button>
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

// const CompsMenu = (props) => {
//     return (
//       <div className={menuStyles.menuWrapper}>
//         <aside className="menu">
//             <p className="menu-label">
//                 Years
//             </p>
//             <ul className="menu-list">
//                 {competitions.map((comp) => {          
//                     return (
//                       <li key={year}>
//                         <a 
//                           className={comp === props.comp 
//                           ? "is-active" 
//                           : ""}
//                           onClick={() => props.setComp(comp)}
//                           >
//                           {year}
//                         </a>
//                         {comp === props.comp 

//                           && <CompList 
//                                 comp={props.comp}
//                                 setComp={props.setComp}
//                         />}
//                       </li>
//                     )  
//                     }
//                 )}
//             </ul>
//         </aside>
//       </div>
//     )
// }


