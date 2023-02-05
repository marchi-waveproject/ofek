import React, { Component } from 'react'

import { ConstantsNames } from "../../../Urls"

//import buidlogo from './../../../../img/icons/buildings/1.svg';

export default class BuildingButton extends Component {
    render() {
        return (
            <div>
                <div className="btnNumber">
                    {this.props.buildingTitle}
                </div>

                <img src={ConstantsNames.pic2 + 'icons/buildings/' + this.props.btnNumber + ".svg?v=" + ConstantsNames.version } alt="ביניין" />
                
                {/*this.props.currentNumber*/}
            </div>
        )
    }
}
