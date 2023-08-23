import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import TextToHtml from './../../../Texthtml';
import Owl from './../../../Owl';

import cityIcon from './../../../../img/icons/cityIcon.svg'

export default class City extends Component {
    render() {

        let page = this.props.pageData.page;

        return (
            <React.Fragment>
                
                < Owl pictures={this.props.pageData.galleryCity} config={{mobile:this.props.mobile, items: 1, stagePadding:0, margin: 0, nav: !this.props.mobile, dots: false}} />

                <header className="circleHeader">
                    <img src={cityIcon} alt="העיר והשכונה" />
                    <h2>העיר והשכונה</h2>
                </header>

                <Container className="text" maxWidth="lg" >
                    <h1>{page.h1}</h1>
                    <TextToHtml NameClass="textParagraph" text={page.cityText} />
                </Container>
            </React.Fragment>
        )
    }
}
