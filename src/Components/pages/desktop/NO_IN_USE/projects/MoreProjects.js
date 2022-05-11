/* https://therichpost.com/integrate-owl-carousel-react-js/ */

/* https://www.npmjs.com/package/react-owl-carousel2 */

/* https://www.npmjs.com/package/react-owl-carousel */

import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import APPIpic from "./../../../APPIpic";

import { animateScroll as scroll, } from 'react-scroll'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


function StatusProj(status) {
    if(status==='פרויקטים שאוכלסו') {
        return 'אוכלס';
    }
    else if(status==='פרויקטים בשיווק') {
        return 'בשיווק'
    }
    else if(status==='פרויקטים עתידים') {
        return 'בקרוב'
    }
    else {
        return '?'
    }
}


export default class owl extends Component {

    state = {
        className: 'owl-MoreProj',
        loop: true,
        stagePadding: 0,
        items: 1,
        margin: 0,
        dots: false,
        lazyLoad: true,
        nav: false
    }

    async componentDidMount() {
       
        if (this.props.config) {
            if (this.props.config.className) {this.setState({className: this.props.config.className})}
            if (this.props.config.loop) {this.setState({loop: this.props.config.loop})}
            if (this.props.config.stagePadding) {this.setState({stagePadding: this.props.config.stagePadding})}
            if (this.props.config.items) {this.setState({items: this.props.config.items})}
            if (this.props.config.margin) {this.setState({margin: this.props.config.margin})}
            if (this.props.config.dots) {this.setState({dots: this.props.config.dots})}
            if (this.props.config.nav) {this.setState({nav: this.props.config.nav})}
            if (this.props.config.lazyLoad) {this.setState({nav: this.props.config.lazyLoad})}
        }
        
    }

    render() {
        
        //console.log(this.props);

        let projectsAll = this.props.infoSite.SiteDataitems.ProjetsLow;
        let currentProj = this.props.pageData.project.info.data;
        
        let projects = projectsAll.filter(function(desc) {
            /* desc.data.statusProj === 'פרויקטים בשיווק' &&  */
            return (desc.data.city === currentProj.city && desc.data.id !== currentProj.id);
        });

        //console.log(projects);


        //console.log(this.props.pictures);
        if (projects.length > 0) {
            return (

                <OwlCarousel
                    style={{direction: 'ltr'}}
                    className={this.state.className}
                    loop={this.state.loop}
                    stagePadding={this.state.stagePadding}
                    items={this.state.items}
                    margin={this.state.margin}
                    nav={this.state.nav}
                    dots={this.state.dots}
                    lazyLoad={this.state.lazyLoad}
                    center                
                >
                    {
                        projects.map(item => (
                        <div className="item" key={item.data.id}>
                            <NavLink  onClick={() => scroll.scrollTo(0)} className='HomeProjectCard' activeClassName='is-active' key={item.data.id} to={"/פרויקטים/" + item.seo.friendly }>
                                <APPIpic pic={item.data.smallPic} alt={item.data.name}/>
                                <div className='text'>
                                    {/*console.log(item)*/}
                                    <h2>{item.data.name} ב{item.data.city} | <small>{StatusProj(item.data.statusProj)}</small></h2>
                                    <Button aria-label={'פרויקט: ' + item.data.name + ' - לפרטים'}  variant="contained" >קרא עוד ></Button>
                                </div>
                            </NavLink>
                        </div>    
                        ))
                    } 

                </OwlCarousel>
            
            )
        } else {return <h3>אין פרוייקטים נוספים בעיר</h3>}
    }
}
