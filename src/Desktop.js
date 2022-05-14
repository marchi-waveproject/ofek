import React, { Component } from 'react'

import ContentWrapper  from './Components/ContentWrapper';
//import Nav  from './Components/pages/desktop/Nav';
import Footer from './Components/pages/desktop/Footer';

import Accessibility from './Components/Accessibility';

import './css/animate.min.css'; /* https://daneden.github.io/animate.css/ */
import './css/site.scss';
import './css/site_pages.scss';
import './css/accessibility.css';

export default class Desktop extends Component {
    render() {
        return (
            <div className={"body-container " + this.props.pageClass}>
                
                <Accessibility  info={this.props.info} accessibility={this.props.accessibility} accesStates={this.props.accesStates}/>

                {/* <Nav info={this.props.info} className="element" /> */}
                
                <div className="content-wrapper">
                    <ContentWrapper page={this.props.page} info={this.props.info} friendProj={this.props.friendProj} />
                </div>

                {this.props.page === 'welcome/beitShemesh' && <Footer {...this.props}/> }

            </div>
        )
    }
}
