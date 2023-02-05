import React, { Component } from 'react'

import Container from '@material-ui/core/Container';

import TextToHtml from './../../../Texthtml';
//import APPIpic from "./../../../APPIpic";
import logoOfek from './../../../../img/icons/logoOfek.svg'
//import logoIgal from './../../../../img/icons/logoIgal.svg'

import Owl from "./.././../../Owl";

export default class Section1 extends Component {
    render() {

        let page = this.props.page;
        

        return (
            <React.Fragment>
                <Container maxWidth="lg" >
                    <h2 className='sec1_h2'>{page.sec1_h2}</h2>
                    <div className="tableSec">
                        <div className="colItem">
                            <img src={logoOfek} alt="אופק שלי" />
                            <TextToHtml NameClass="text" text={page.ofekText} />
                        </div>
                        
                    </div>
                    { this.props.mobile ? 
                        <div className='picturesMobile'>
                            < Owl pictures={this.props.gallery} section1={true} config={{mobile:true, items: 1, stagePadding:40, margin: 5, nav: false, dots: false}} />
                        </div> :
                
                    <div className='pictures'>
                        {
                            this.props.gallery.map(item => (
                            <div className="item" key={item.data.id}>
                                {/* <APPIpic  pic={item} mobile={this.props.mobile} /> */}
                                <TextToHtml NameClass="hover" text={item.data.text} />
                            </div>    
                            ))
                        } 
                    </div> }

                    <p className="smallText">*הדמיות להמחשה בלבד</p>
                </Container>
            </React.Fragment>
        )
    }
}
