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
import logo from './../../../img/default/logoMenu.svg'; */


export default class FooterBlueWave extends Component {

    
    

    render() {

      
        let site = this.props.info.SiteDataitems;
        //let Background = ConstantsNames.pic + site.settings.footer_bg;
        //console.log(this.props);

        //let ProjetsLow = this.props.info.SiteDataitems.ProjetsLow;
              
        return (
            <div className="footer-wrapper">
                <footer className="site-footer" role="contentinfo">

                    <section className="beitShemeshFooter">
                        <Container maxWidth="lg" >
                            <APPIpic showclass={false} pic={site.contactData.logosFooterBlueWave} alt='' fullWidth={false} />
                            <TextToHtml NameClass='downTextFooter' text={site.contactData.BlueWaveText} format=""/>
                        </Container>
                    </section>


                </footer>
            </div>
        )
    }
}
