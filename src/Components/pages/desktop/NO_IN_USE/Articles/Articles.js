import React, { Component } from 'react'
import APPIpic from '../../../APPIpic';
import Container from '@material-ui/core/Container';

export default class Articles extends Component {

    render() {

        //console.log(this.props);

        return (
            <div className='ArticlePage'>

                <APPIpic fullWidth={true} pic={this.props.pageData.page.bg} alt={this.props.pageData.page.h1} />
                <Container maxWidth="lg" >
                    <h1>{this.props.pageData.page.h1}</h1>
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
