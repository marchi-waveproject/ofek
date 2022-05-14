import React from 'react'

import logoMenu from './../../../../img/default/logoBlack.svg'
import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */

export default function MenuTop() {
  return (
    <div className='wrapper'>

        <div className='menuHomepage'>
          
          <div className='rItems'>
            <img className='logoMenu' src={logoMenu} alt='' />
            <ul>
              <li onClick={() => scroll.scrollToBottom(0)} >אודות</li>
              <li>פרויקטים</li>
              <li onClick={() => scroll.scrollToBottom(0)} >צור קשר</li>
            </ul>
          </div>

          <div className='lItems'>
            <p><small>*</small>2898</p>
          </div>
          

        </div>

    </div>
  )
}
