import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import TextToHtml from './../../../Texthtml';

import PopupText from './PopupText';

export default class PurchaseProcess extends Component {


    constructor(props) {

        super(props);
        
        //console.log(this.props);

        this.state = {
            popUpText_View:  false,
            popUpText_Message: 'הודעה'
        }
    }

    showHidepopUpText = (longText) => {

        //console.log(showMe);

        this.setState(
            {
                popUpText_View : true,
                popUpText_Message: longText
            });

        console.log(this.state.popUpText_View);
        
        
    }

    hidePopUp = () => {
        this.setState(
            {
                popUpText_View : false
            }
        )
        //console.log('DONE');
    }


    render() {
        let page = this.props.pageData.page;

        return (
            <React.Fragment>

                <Container className="text" maxWidth="lg" >
                    <h2>תהליך הרכישה</h2>
                    <div className='bullets'>
                        <ul>
                            <li onClick ={ () => this.showHidepopUpText(page.purchaseProcessText1_long) }>
                                <TextToHtml format='p' NameClass='text' text={page.purchaseProcessText1} />
                                <a onClick ={ () => this.showHidepopUpText(page.purchaseProcessText1_long) }  href='#readMore' className='readMore' >קרא עוד</a>
                            </li>
                            <li onClick ={ () => this.showHidepopUpText(page.purchaseProcessText2_long) }>
                                <TextToHtml format='p' NameClass='text' text={page.purchaseProcessText2} />
                                <a onClick ={ () => this.showHidepopUpText(page.purchaseProcessText2_long) }  href='#readMore' className='readMore' >קרא עוד</a>
                            </li>
                            <li onClick ={ () => this.showHidepopUpText(page.purchaseProcessText3_long) }>
                                <TextToHtml format='p' NameClass='text' text={page.purchaseProcessText3} />
                                <a onClick ={ () => this.showHidepopUpText(page.purchaseProcessText3_long) }  href='#readMore' className='readMore' >קרא עוד</a>
                            </li>
                            <li onClick ={ () => this.showHidepopUpText(page.purchaseProcessText4_long) }>
                                <TextToHtml format='p' NameClass='text' text={page.purchaseProcessText4} />
                                <a onClick ={ () => this.showHidepopUpText(page.purchaseProcessText4_long) } href='#readMore' className='readMore' >קרא עוד</a>
                            </li>
                        </ul>
                    </div>

                    {this.state.popUpText_View ? <PopupText hidePopUp={this.hidePopUp} pageData={page} show={true} message={this.state.popUpText_Message} /> : false }

                    {/* <TextToHtml NameClass="bullets" text={page.purchaseProcessText} /> */}
                </Container>
            </React.Fragment>
        )
    }
}
