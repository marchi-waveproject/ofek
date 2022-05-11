import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' /* https://react-bootstrap.github.io/components/carousel/ */

import lupaBlack from './../../../../img/icons/black/lupaBlack.svg'
import APPIpic from "./../../../APPIpic";

//import ReactImageMagnify from 'react-image-magnify';
//https://www.npmjs.com/package/react-image-magnify

//import { ConstantsNames as pathUrl } from "../../../Urls"

//import { ImageGroup, Image } from 'react-fullscreen-image'
/* https://www.npmjs.com/package/react-fullscreen-image */


export default class CarouselPlans extends Component {

    

    constructor(props) {
        
        //console.log(props.pictures)

        super(props);

        this.state = {
            update: this.props.update,
            showModal: false,
            picture: false
        }
    }
    

    handleClick = (data) => {
        //console.log(data);
        this.props.modalData(data);
    }

    render() {

        if(this.state.update) {
            this.setState({update : false});
            this.forceUpdate();
        }

        return (
            <div>
                <Carousel   className='carouselProj'
                            indicators={this.props.pictures.length === 1 ? false : true }
                            controls={this.props.pictures.length === 1 ? false : true } >

                    {
                        this.props.pictures.map(item => (
                        <Carousel.Item key={item.data.id} >
                            <button  onClick={(e) => this.handleClick(item.data) } >
                                <img className='lupa' src={lupaBlack} alt='הגדלה'/>
                                <APPIpic pic={item} mobile={this.props.mobile ? this.props.mobile : false } /> 
                            </button>
                            <Carousel.Caption>{item.data.model}</Carousel.Caption>
                        </Carousel.Item>
                        
                        ))
                        
                    }
                    
                </Carousel>

                
            </div>
        )
    }
}
