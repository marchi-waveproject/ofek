import React, { Component, Fragment } from 'react'

import NumberFormat from 'react-number-format';
//https://github.com/s-yadav/react-number-format

import pdfPic from './../../../../img/icons/pdfFile.svg';
import { ConstantsNames } from "../../../Urls"

export default class TrTable extends Component {

    render() {

        //console.log(this.props.department.price);

        //console.log('table');

        console.log(this.props);

        if(this.props.department.is_not_mishtake === '1' && this.props.department.is_sold !== '1' ) {

            return (
                
                <tr className="trHofshi">
                    <td>{this.props.info.data.migrash.title}</td>
                    <td>{this.props.building.title}</td>
                    <td>{this.props.department.title}</td>
                    <td colSpan='10'><strong>- שוק חופשי -</strong></td>
                </tr>
            );

        } else if(this.props.department.is_sold === '1' ) {

            return (
                
                <tr className="trSold">
                    <td>{this.props.info.data.migrash.title}</td>
                    <td>{this.props.building.title}</td>
                    <td>{this.props.department.title}</td>
                    <td colSpan='10'><strong>- נמכר -</strong></td>
                </tr>
            )

        } else if(this.props.price && this.props.rooms && this.props.noMishtaken && this.props.available) {
            return (
                
                <tr>
                    <td>{this.props.info.data.migrash.title}</td>
                    <td>{this.props.building.title}</td>
                    <td>{this.props.department.title}</td>
                    
                        <td style={{direction: "LTR" }}>{this.props.department.floor}</td>

                        <td>{this.props.department.rooms}</td>

                        <td>{this.props.department.sizeApp}</td>
                        <td>{this.props.department.sizeApp2}</td>
                        <td>{this.props.department.sizeStore}</td>
                        <td>{this.props.department.storeNumber}</td>
                        <td>{this.props.department.parkingNumber}</td>
                        <td>{this.props.department.notes}</td>
                        <td >
                            { parseFloat(this.props.department.price) > 0 ? <Fragment>
                                <NumberFormat value={this.props.department.price} displayType={'text'} thousandSeparator={true} /* prefix={} */ /> ש״ח
                            </Fragment> : <span>-</span> }
                        </td>
                        <td className='toPDFFile'>
                            {this.props.department.pdfFile ? 
                            <a href={ConstantsNames.files + this.props.department.pdfFile} rel='noopener noreferrer' target='_blank'>
                                <img src={pdfPic} alt={this.props.building.title} />
                            </a>
                            : ''}
                        </td>
                </tr>
            )
        }
        else {
            return false;
        }
    }
}
