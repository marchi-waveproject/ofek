import React, { Component } from 'react'
import APPIpic from '../../../APPIpic';
import TextToHtml from './../../../../Components/Texthtml';

export default class ShowProj extends Component {

    render() {
        
        
        let currentId = this.props.id;
        let centerProj = this.props.pageData.centerProj;
        let selectedProj =  centerProj.filter(function(desc) {
            return desc.data.id === currentId;
        });

        //console.log(this.props);

        return (
            <div className='ShowSelectedProj animated fadeIn'>

                <figure>
                    <APPIpic pic={this.props.pageData.page.logo_center} alt={this.props.pageData.page.he_title}/>
                </figure>

                <div className='tableProj'>
                    <div className='col info'>
                        <h2>{selectedProj[0].data.name}</h2>
                        <TextToHtml text={selectedProj[0].data.description} format=""/>
                    </div>
                    <div className='col pic'>
                        <APPIpic pic={selectedProj[0].data.image} alt={selectedProj[0].data.name}/>
                    </div>
                </div>

            </div>
        )
    }
}
