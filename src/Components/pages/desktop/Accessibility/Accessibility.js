import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import APPIpic from '../../../APPIpic';
import TextToHtml from './../../../Texthtml';
import { NavLink } from 'react-router-dom'; 



export default class Accessibility extends Component {
    render() {

        let page = this.props.pageData.page;

        //console.log(page);

        return (
            <div className="AccPage">
                <APPIpic fullWidth={true} pic={this.props.pageData.page.bg} alt={this.props.pageData.page.h1} />

                

                <Container maxWidth="lg" >
                    <div className="columns">
                        <NavLink className='toBack' to="/">
                            <span>&laquo; חזרה לעמוד הבית</span>
                        </NavLink>
                        <h1>{page.h1}</h1>
                        
                        <TextToHtml text={this.props.pageData.page.text1} format="" NameClass="text1" />

                        <APPIpic showclass="logo" fullWidth={true} pic={this.props.pageData.page.icon} alt='לוגו נגישות' />

                        <TextToHtml text={this.props.pageData.page.text2} format="" NameClass="text2" />
                    </div>
                    
                </Container>
            </div>
        )
    }
}
