import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import logo from './../../../img/default/logoMenu.svg';

//import b_facebookIcon from './../../../img/icons/black/facebook.svg';
//import b_instagram from './../../../img/icons/black/instagram.svg';

import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */

//import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */

export default class Nav extends Component {

   

  render() { 
    
    /* let PagesNames = {

      home: [{
        url:'/' + this.props.info.SiteDataitems.pages[0].seo.friendly,
        namePage : this.props.info.SiteDataitems.pages[0].title
      }],

      contact: [{
        url:'/' + this.props.info.SiteDataitems.pages[3].seo.friendly,
        namePage : this.props.info.SiteDataitems.pages[3].title
      }]     

    } */
    
    //console.log(this.props.info.SiteDataitems.pages);
    //console.log(this.props);

    return <div className="header-wrapper">
      <div className='site-header'>

        <div className="topHeader">
          <div className='main-menu colMenu'>
            <NavLink activeClassName='is-active' to="/">
              {this.props.blueWave ? <div style={{display:'inline-block'}}>LOGO SVG</div> : 
                <img className='mainLogo' src={logo} alt={this.props.info.SiteDataitems.settings.sitename} />}
            </NavLink>

            <nav role="menu" aria-label="תפריט ראשי" className="colMenu">
                <Link href="#" activeClass="is-active" to='section1' spy={true} smooth={true} isDynamic={true} offset={-165} >היזם</Link> 
                <Link href="#" activeClass="is-active" to='city' spy={true} smooth={true} isDynamic={true} offset={-165} >העיר והשכונה</Link> 
                <Link href="#" activeClass="is-active" to='MapsPictures' spy={true} smooth={true} isDynamic={true} offset={-165} >מפות ותרשימים</Link> 
                <Link href="#" activeClass="is-active" to='project' spy={true} smooth={true} isDynamic={true} offset={-165} >הפרויקט</Link> 
                <Link href="#" activeClass="is-active" to='purchaseProcess' spy={true} smooth={true} isDynamic={true} offset={-165} >תהליך הרכישה</Link> 

                <Link href="#" activeClass="is-active" to='payments' spy={true} smooth={true} isDynamic={true} offset={-165} >פריסת תשלומים</Link> 
                
                <Link href="#" activeClass="is-active" to='Mortgage' spy={true} smooth={true} isDynamic={true} offset={-165} >משכנתא</Link> 
                <Link href="#" activeClass="is-active" to='Prices' spy={true} smooth={true} isDynamic={true} offset={-165} >מחירון</Link> 
                <Link href="#" activeClass="is-active" to='DeppartmentFile' spy={true} smooth={true} isDynamic={true} offset={-165} >תוכניות</Link> 
                <Link href="#" activeClass="is-active" to='DoccumentsFiles' spy={true} smooth={true} isDynamic={true} offset={-165} >מסמכים להורדה</Link> 
                {/* <Link href="#" activeClass="is-active" to='MapSection' spy={true} smooth={true} isDynamic={true} offset={-165} >מיקום הפרויקט</Link>  */}
                <Link href="#" activeClass="is-active" to='site-footer' spy={true} smooth={true} isDynamic={true} offset={-165} >צור קשר</Link> 
            </nav>
          </div>

          {/* <div className='social col'>
            <div className="leftMenu">
              <Link activeClass="is-active" to='siteMapTable' spy={true} smooth={true} isDynamic={true} offset={-165} >{PagesNames.contact[0].namePage}</Link> 
            </div>
            

            <a role="menuitem" href={this.props.info.SiteDataitems.settings.instagram} rel='noopener noreferrer' target='_blank'>
              <img className="black" src={b_instagram} alt='instagram' />
            </a>

            <a role="menuitem" href={this.props.info.SiteDataitems.settings.facebook} rel='noopener noreferrer' target='_blank'>
              <img className="black" src={b_facebookIcon} alt='facebook' />
            </a>

            <span className='sitePhone'>{this.props.info.SiteDataitems.settings.sitephone}</span>
          </div> */}
        </div>

        
      </div>
      
    </div>
  }
    

  }
