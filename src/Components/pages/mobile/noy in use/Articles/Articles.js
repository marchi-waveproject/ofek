import React, { Component } from 'react'
import APPIpic from '../../../APPIpic';
import Container from '@material-ui/core/Container';

export default class Articles extends Component {

    render() {

        //console.log(this.props);

        return (
            <div className='ArticlePage'>
                
                <h1 className='pageTitle'>{this.props.pageData.page.h1}</h1>

                <APPIpic fullWidth={true} pic={this.props.pageData.page.m_bg} alt={this.props.pageData.page.h1} />
                <Container maxWidth="lg" >
                
                    <nav>
                    {this.props.pageData.articles.map(value => (
                    <a key={value.id} href={value.text} rel='noopener noreferrer' target='_blank' >{value.title}</a>
                    ))}
                    </nav>
                </Container>
            </div>
        )
    }
}
