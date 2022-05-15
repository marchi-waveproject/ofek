import React, { Component } from 'react'
//import { ConstantsNames } from "../../Urls"
//import FormConnector from '../../forms/FormConnector';
import TextToHtml from '../../Texthtml';
import Container from '@material-ui/core/Container';

import APPIpic from '../../APPIpic';

//import { NavLink } from 'react-router-dom'; 

//import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */


/* import b_facebookIcon from './../../../img/icons/black/facebook.svg';
import b_instagram from './../../../img/icons/black/instagram.svg';
import b_youtube from './../../../img/icons/black/youtube.svg';
import logo from './../../../img/default/logoMenu.svg';
 */

export default class Footer extends Component {

    
    

    render() {

      
        let site = this.props.info.SiteDataitems;
        //let Background = ConstantsNames.pic + site.settings.m_footer_bg;



        //console.log(this.props);

        //let ProjetsLow = this.props.info.SiteDataitems.ProjetsLow;
              
        return (
            <div className="footer-wrapper">
                <footer className="site-footer" >

                    {/* <section className='formSec' style={{backgroundImage: "url(" + Background + ")" }} >
                        <TextToHtml text={site.settings.m_form_title} format="h2"/>
                        
                        <FormConnector pageData={this.props} infoSite={this.props.info} showProjects={true} />

                    </section>
                    

                    <section className='downText'>
                        <Container maxWidth="lg" >
                            <div className='siteMapTable'>
                               
                                <div className='col social'>
                                     
                                    <img className='mainLogo' src={logo} alt={this.props.info.SiteDataitems.settings.sitename} />

                                    <div className='text'>
                                        <TextToHtml text={site.settings.m_footer_text} format=""/> 
                                    </div>

                                    <a href={this.props.info.SiteDataitems.settings.instagram} rel='noopener noreferrer' target='_blank'>
                                        <img className="black" src={b_instagram} alt='instagram' />
                                    </a>

                                    <a href={this.props.info.SiteDataitems.settings.facebook} rel='noopener noreferrer' target='_blank'>
                                        <img className="black" src={b_facebookIcon} alt='facebook' />
                                    </a>

                                    <a href={this.props.info.SiteDataitems.settings.facebook} rel='noopener noreferrer' target='_blank'>
                                        <img className="black" src={b_youtube} alt='youtube' />
                                    </a>
                                    
                                </div>
                            </div>
                        </Container>
                    </section> */}

                    <section className="beitShemeshFooter">
                        <Container maxWidth="lg" >
                            <APPIpic showclass={false} pic={site.contactData.logosFooter} alt='' fullWidth={false} />
                            <TextToHtml NameClass='downTextFooter' text={site.contactData.h2} format=""/>
                        </Container>
                    </section>

                    {/* <div className="credit">
                        <a href="http://ak-adv.co.il" target="_blank"  rel="noopener noreferrer">
                            <img src="https://ak-digital.net/ak-mobile/mail_img/ak-b-hd.gif" alt="Avioz-Krispin" />
                        </a>
                    </div> */}

                </footer>
            </div>
        )
    }
}
