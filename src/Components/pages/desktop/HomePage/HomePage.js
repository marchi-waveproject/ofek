import React from 'react'
import MenuTop from './MenuTop';
/* import Loading from '../../../utils/Loading'; */

import './homePage.scss';

export default function HomePage(props) {

    const {infoSite} = props

    console.log(infoSite);

    //http://localhost:3000/%D7%A0%D7%95%D7%95%D7%94_%D7%A9%D7%9E%D7%99%D7%A8

  return (
    <div>
        <MenuTop />
        {/* <Loading open={true} noBackdrop={false} /> */}
        HomePage
    </div>
  )
}
