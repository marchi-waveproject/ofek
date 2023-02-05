import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import APPIpic from "./../../../APPIpic";

export default class GalleryPictures extends Component {
    state = {
        mobile: false,
        className: 'owl-theme',
        loop: true,
        stagePadding: this.props.mobile ? 20 : 0,
        items: 1,
        margin: this.props.mobile ? 10 : 0,
        dots: this.props.mobile ? true: true,
        lazyLoad: true,
        nav: this.props.mobile ? false : true
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
                >
                    <div className="item">
                        <APPIpic fullWidth={true} pic={this.props.first} mobile={this.props.mobile ?  true : false} />
                    </div>  
                    {
                        pictures.map(item => (
                        <div className="item" key={item.data.id}>
                            <APPIpic  fullWidth={true} pic={item} mobile={this.props.mobile ?  true : false} />
                        </div>  
                        ))
                    } 

                </OwlCarousel>
            
            )
        } else {return false}
    }
}
