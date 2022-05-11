import React, { Component } from 'react'

import ContentWrapper  from './Components/m_ContentWrapper.js';
//import Nav  from './Components/pages/mobile/Nav';
import Footer from './Components/pages/mobile/Footer';

import Accessibility from './Components/Accessibility';

import './css/m_site.css';
import './css/m_site_pages.css';

export default class Mobile extends Component {
    render() {
        return (
            <div className={"body-container " + this.props.pageClass}>
                
                <Accessibility  info={this.props.info} accessibility={this.props.accessibility} accesStates={this.props.accesStates}/>

                {/* <Nav info={this.props.info} className="element" /> */}
                
                <div className="content-wrapper">
                    
                    <ContentWrapper page={this.props.page} info={this.props.info} friendProj={this.props.friendProj} />
                </div>

                <Footer {...this.props}/>
            </div>
        )
    }
}
