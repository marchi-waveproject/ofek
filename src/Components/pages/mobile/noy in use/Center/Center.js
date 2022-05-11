import React, { Component } from 'react'
import APPIpic from '../../../APPIpic';

import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */
import ShowProj  from './../../desktop/Center/ShowProj';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class Center extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          idActive: false
        }
    }
    
    editHandler = (data) => {
        
        if(data) {
            this.setState({
                idActive : data,
            });
        }
    }

    showActive = (data, props) => {

        //console.log(data);
        
        if(data >= 1) {
            return(
                <ShowProj id={data} {...props} />
            );
        } else return false;
    }


    render() {

        //console.log(this.props);
        let centerProj = this.props.pageData.centerProj;
        //console.log(centerProj);

        return (

            <div className='CenterPage'>
                
                <h1 className='hidden'> {this.props.pageData.page.h1}</h1>


                <APPIpic showclass='logoHeader' pic={this.props.pageData.page.logo_center} alt={this.props.pageData.page.he_title}/>

                <nav className='items'>

                    <OwlCarousel
                    style={{direction: 'ltr'}}
                    className='CenterProjects'
                    loop={true}
                    stagePadding={50}
                    items={1}
                    margin={10}
                    nav={false}
                    dots={true}
                    lazyLoad={true}
                    center                
                >
                    
                    {centerProj.map(proj => (
                        <Link key={proj.data.id} activeClass="active"  onClick={ e => this.editHandler(proj.data.id)} to='ShowSelectedProj' spy={true} smooth={true} isDynamic={true} offset={-130} >
                            <APPIpic pic={proj.data.image} alt={proj.data.name}/>
                            <div className='text'>
                                {/*console.log(item)*/}
                                <h2>{proj.data.name}</h2>
                                <div className='fakeBtn'>קרא עוד ></div>
                            </div>
                        
                        </Link>
                    ))}
                </OwlCarousel>
                </nav>

                {this.showActive(this.state.idActive, this.props)}
            </div>
        )
    }
}

