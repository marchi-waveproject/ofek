import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import TextToHtml from './../../../Texthtml';

import paymentstIcon from './../../../../img/icons/payments.svg'

export default class Payments extends Component {

    render() {
        let page = this.props.pageData.page;

        return (
            <React.Fragment>

                 <header className="circleHeader">
                    <img src={paymentstIcon} alt="פריסת תשלומים והוצאות נלוות" />
                    <h2>פריסת תשלומים<br/>והוצאות נלוות</h2>
                </header> 

                <div className="greyColor">
                    <Container className="text" maxWidth="lg" >
                        <div className="moreText">
                            <div className="textCont">
                                <div className="columns">
                                    <TextToHtml NameClass="colText" text={page.purchaseProcess_A} />
                                    <TextToHtml NameClass="colText" text={page.purchaseProcess_B} />
                                </div>
                                <div className="Text">
                                    <TextToHtml NameClass="" text={page.purchaseProcess_C} />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
