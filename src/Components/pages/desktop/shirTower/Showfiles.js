import React, { Component } from 'react'

import pdfPic from './../../../../img/icons/pdfFile.svg';
import { ConstantsNames } from "../../../Urls"

export default class Showfiles extends Component {


    render() {

        let data = this.props.data;
        

        if(this.props.col === 'koma') {

            //console.log('KOMA PISO: ' + this.props.floor + ' ' + data.floor + 'data: ' +  data.file_floor );

            if(this.props.floor === data.floor && data.file_floor) {
                return <a  href={ConstantsNames.files + data.file_floor } rel='noopener noreferrer' target='_blank' >
                        <span style={{display: "inline-block" }}>{data.title}</span>
                        <img src={pdfPic} alt={data.title} />
                    </a>
            } else {
                return false;
            }

        } else if(this.props.col === 'dira') {
            //console.log('DIRA PISOS' + this.props.floor + ' ' + data.floor + 'data: ' +  data.file_department );
            if(this.props.floor === data.floor && data.file_department) {
                return  <a  href={ConstantsNames.files + data.file_department } rel='noopener noreferrer' target='_blank' >
                            <img src={pdfPic} alt={data.title} />
                            <span>{data.title}</span>
                        </a>
            } else {
                return false;
            }


        } else {
            return false;
        }


        
    }
}
