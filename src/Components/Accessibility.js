import React, { Component } from 'react'
import './../css/accessMenu.css';

import accessibilityOpen from './../img/icons/accessibility/accessibility.svg';

import { NavLink } from 'react-router-dom';
import { animateScroll as scroll, } from 'react-scroll'

import EyeOn from './../img/icons/accessibility/EyeOn.svg';
import EyeOff from './../img/icons/accessibility/EyeOff.svg';

import Ton from './../img/icons/accessibility/Ton.svg';
import Toff from './../img/icons/accessibility/Toff.svg';

import linkOn from './../img/icons/accessibility/linkOn.svg';
import linkOff from './../img/icons/accessibility/linkOff.svg';

import zoomIn from './../img/icons/accessibility/zoomIn.svg';
import zoomOut from './../img/icons/accessibility/zoomOut.svg';

import toPage from './../img/icons/accessibility/toPage.svg';


export default class Accessibility extends Component {

    constructor(props) {
        
        //console.log(props.pictures)

        super(props);

        this.state = {
            openClose: 'closed'
            /* openClose: 'opened' */
        }
    }

    handleClick = (data) => this.props.accessibility(data);

    handleOpen = () => {
        //console.log(this.state.openClose);

        if (this.state.openClose === 'closed') {
            this.setState({openClose:'opened' })
        } else {
             this.setState({openClose:'closed' });
        }

    }


    render() {


        let PagesNames = {
            accessibility: [{
                url:'/' + this.props.info.SiteDataitems.pages[2].seo.friendly,
                namePage : this.props.info.SiteDataitems.pages[2].title
            }]
        }

        return (
            <div className={'accessMenu ' + this.state.openClose }>

                <div className={'menuCont '}>

                    <ul role="menu">
                        <li role="menuitem" className={this.props.accesStates.accessibilityClass === 'accessibility' ? 'active' : ''}>
                            <button onClick={() => this.handleClick('accessibility')} >
                                <figure>
                                    <img src={ this.props.accesStates.accessibilityClass === 'accessibility' ? EyeOn : EyeOff } alt='תצוגה לכבדי ראייה'/>
                                    <figcaption>תצוגה לכבדי ראייה</figcaption>
                                </figure>

                            </button>
                        </li>

                        {this.props.info.media !== 'mobile' ? 

                            <li role="menuitem" className={this.props.accesStates.zoomClass === 'zoomIn' ? 'active' : ''}>

                                <button onClick={() => this.handleClick('zoomIn')} >
                                    <figure>
                                        <img src={ this.props.accesStates.zoomClass === 'zoomIn' ? zoomOut : zoomIn } alt='הגדל או הקטן טקסט'/>
                                        <figcaption>הגדל או הקטן</figcaption>
                                    </figure>
                                </button>
                            </li> : false
                        }

                        <li role="menuitem" className={this.props.accesStates.linksClass === 'linksOn' ? 'active' : ''}>
                            <button onClick={() => this.handleClick('linksOn')} >
                                <figure>
                                    <img src={ this.props.accesStates.linksClass === 'linksOn' ? linkOn : linkOff } alt='הדגשת קישורים'/>
                                    <figcaption>הדגשת קישורים</figcaption>
                                </figure>
                            </button>
                        </li>

                        <li role="menuitem" className={this.props.accesStates.fontsClass === 'fontsOn' ? 'active' : ''}>
                            <button onClick={() => this.handleClick('fontsOn')} >
                                <figure>
                                    <img src={ this.props.accesStates.fontsClass === 'fontsOn' ? Ton : Toff } alt='גופן קריא יותר'/>
                                    <figcaption>גופן קריא יותר</figcaption>
                                </figure>
                            </button>
                        </li>

                        
                        <li role="menuitem">
                            <NavLink activeClassName='is-active' onClick={() => scroll.scrollTo(0)} to={PagesNames.accessibility[0].url}>
                                <figure>
                                    <img src={ toPage } alt={PagesNames.accessibility[0].namePage}/>
                                    <figcaption>{PagesNames.accessibility[0].namePage}</figcaption>
                                </figure>
                            </NavLink>
                        </li>


                    </ul>
                    
                </div>

                <button aria-label='תפריט נגישות' tabIndex="1" onClick={() => this.handleOpen()} className='openMenu'>
                    <img src={accessibilityOpen} alt='נגישות'/>
                </button>
                

            </div>
        )
    }
}
