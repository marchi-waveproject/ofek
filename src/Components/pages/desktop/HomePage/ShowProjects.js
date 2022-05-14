import React from 'react'
import { map } from "lodash" //https://lodash.com/docs/4.17.15#map

import {ConstantsNames} from '../../../Urls';
import { NavLink } from 'react-router-dom'; 
import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */

export default function ShowProjects(props) {

    const {page,projects} = props

  return (
    <div className='projectsCont'>

        <h1>{page.h1}</h1>

        <div className='wrapper'>
            <div className='projectsFlex'>
                {map(projects, item => {
                        
                        return < Project key={item.id} item = {item} />
                    
                })}
            </div>
        </div>

    </div>
  )
}

function Project(props) {

    const {item} = props

    return(
        <NavLink activeClassName='is-active' to={ item.friendlyUrl ? '/' + item.friendlyUrl : '/#' } onClick={() => scroll.scrollTo(0)}>
            <div className={`projectHome ${item.is_soon === '0' ? 'link' : ''}`}>
                <figure>
                    {item.is_soon === '1' && <div><p>בקרוב</p></div>}
                    <img src={ConstantsNames.pic + item.pic} alt={item.name} />
                </figure>
                
                <div className='dataLine'>
                    
                    <h2>{item.name} <small>| {item.cityProj}</small></h2>
                    <div className='fakeBtn'>לפרטים נוספים</div>
                </div>
                
            </div>
        </NavLink>
    )

}
