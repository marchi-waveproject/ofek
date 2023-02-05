import React, { Component } from 'react'

//import Container from '@material-ui/core/Container';
import TextToHtml from './../../../Texthtml';

import { ConstantsNames } from "../../../Urls"

import projectIcon from './../../../../img/icons/projectIcon.svg'

import lupa from './../../../../img/icons/white/lupa.svg'
import PopupPicture from './PopupPicture';

export default class Project extends Component {

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
        let Background = ConstantsNames.pic + page.projectBg;
        
        return (
            <React.Fragment>

                <header className="circleHeader">
                    <img src={projectIcon} alt="הפרויקט" />
                    <h2>הפרויקט</h2>
                </header> 

                <div className="text" style={{backgroundImage: "url(" + Background + ")" }}>
                    <TextToHtml NameClass="textParagraph" text={page.projectText} />

                    { !this.props.mobile ?
                        <button className="lupaBtn" onClick ={ () => this.showHidepopUpText(page.bigProjectPic) }>
                            <img className="lupa" src={lupa} alt="" />
                        </button> : false
                    }

                    { !this.props.mobile ?
                        <button className="lupaBtn bigPic2" onClick ={ () => this.showHidepopUpText(page.bigProjectPic2) }>
                            <img className="lupa" src={lupa} alt="" />
                        </button> : false
                    }      
                </div>

                <p className="smallText">*הדמיות להמחשה בלבד</p>
                
                {this.state.popUpText_View ? <PopupPicture hidePopUp={this.hidePopUp} pageData={page} mobile={this.props.mobile} gallery={this.props.pageData.moreProjectPic} show={true} message={this.state.popUpText_Message} /> : false }

            </React.Fragment>
        )
    }
}
