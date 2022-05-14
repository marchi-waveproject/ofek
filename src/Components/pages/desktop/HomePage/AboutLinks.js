import React from 'react'

import logoOfekSheliNormal from './../../../../img/default/logoOfekSheliNormal.svg'

import face from './../../../../img/homePage/face.svg'
import insta from './../../../../img/homePage/insta.svg'

export default function AboutLinks(props) {

    const {page,infoSite} = props;

  return (
    <div className='aboutLinks'>
        <div className='links'>
            <img className='logoOfekSheliNormal' src={logoOfekSheliNormal} alt='אופק שלי' />
            <div className='allLinks'>
                <a href={infoSite.SiteDataitems.settings.instagram} target="_blank" rel="noopener noreferrer">
                   <img src={insta} alt='instagram'/>
                </a>
                <a href={infoSite.SiteDataitems.settings.facebook} target="_blank" rel="noopener noreferrer">
                    <img src={face} alt='facebook'/>
                </a>
                <p><small>*</small>2898</p>
            </div>
        </div>

        <div className='text' dangerouslySetInnerHTML={{ __html: page.text }} />
        
    </div>
  )
}
