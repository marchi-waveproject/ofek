/* https://therichpost.com/integrate-owl-carousel-react-js/ */

/* https://www.npmjs.com/package/react-owl-carousel2 */

/* https://www.npmjs.com/package/react-owl-carousel */

import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import APPIpic from "./APPIpic";
import TextToHtml from './Texthtml';

export default class owl extends Component {

    state = {
        mobile: false,
        className: 'owl-theme',
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
            if (this.props.config.mobile) {this.setState({mobile: this.props.config.mobile})}
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
        //console.log(this.state.mobile);
        let pictures = this.props.pictures;
        //console.log(this.props.pictures);
        if (pictures[0].data) {
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
                        pictures.map(item => (
                        <div className="item" key={item.data.id}>
                            <APPIpic  pic={item} mobile={this.props.config.mobile ?  true : false} />
                            { this.props.section1 ? <TextToHtml NameClass="downText" text={item.data.text} /> : false }
                        </div>    
                        ))
                    } 

                </OwlCarousel>
            
            )
        } else {return false}
    }
}
