import React, { Component } from 'react'
import ShowMap from './../projects/ShowMap';
import TextToHtml from './../../../../Components/Texthtml';

export default class Contact extends Component {
    render() {

        //console.log(this.props);

        return (
            <div className='ContactPage'>
                <ShowMap width='100%' height='400px' data={{logo:this.props.pageData.page.logoContact, name: 'אביסרור'}} lat={31.244325} long={34.798320} />
                <h1 className='hidden'>צור קשר</h1>

                <div className='text'>
                    <TextToHtml text={this.props.pageData.page.text} format=""/>
                </div>
            </div>
        )
    }
}
