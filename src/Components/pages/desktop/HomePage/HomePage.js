import React from 'react'
import MenuTop from './MenuTop';
/* import Loading from '../../../utils/Loading'; */

import './homePage.scss';
import ShowProjects from './ShowProjects';
import AboutLinks from './AboutLinks';
import ContactForm from './ContactForm';
import MmenuTop from './MmenuTop';

export default function HomePage(props) {

    const {infoSite,pageData} = props

    //console.log(infoSite);
    //console.log('pageData', pageData);

    const is_Mobile = infoSite.media === 'mobile' ? true : false;
    //http://localhost:3000/%D7%A0%D7%95%D7%95%D7%94_%D7%A9%D7%9E%D7%99%D7%A8
    

  return (
    <div>

        {is_Mobile ? < MmenuTop /> : <MenuTop />}

        <ShowProjects is_Mobile = {is_Mobile} page={pageData.page} projects = {pageData.projects} />
        
        <div className='wrapper'>

          <div className='down'>
            <AboutLinks page={pageData.page} infoSite={infoSite} />
            <ContactForm  page={pageData.page}  infoSite={infoSite} />
          </div>

        </div>
        
    </div>
  )
}
