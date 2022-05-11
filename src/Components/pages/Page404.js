import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
import { animateScroll as scroll, } from 'react-scroll'

import pic404 from './../../img/icons/404.svg';

export default class Page404 extends Component {
    render() {
        return (
            <div className='Page404' >
                <NavLink activeClassName='is-active' onClick={() => scroll.scrollTo(0)} to={'/'}>
                    <img src={ pic404 } alt='404 דף לא נמצא' />
                </NavLink>
            </div>
        )
    }
}
