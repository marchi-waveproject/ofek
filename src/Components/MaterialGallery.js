import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' /* https://react-bootstrap.github.io/components/carousel/ */
import APPIpic from "./APPIpic";


export default class MaterialGallery extends Component {
    render() {

        let pictures = this.props.pictures;

        if (pictures[0].data) {
            return (
                <div>
                    <Carousel className='carouselProj'  indicators={ pictures.length === 1 ? false : true }
                        controls={pictures.length === 1 ? false : true } >

                        {
                            pictures.map(item => (
                            <Carousel.Item key={item.data.id}>
                                    <APPIpic pic={item} />
                                   {/*  <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption> */}
                            </Carousel.Item>
                            
                            ))
                        }
                        
                    </Carousel>
                </div>
            )
        } else {return false}
    }
}



