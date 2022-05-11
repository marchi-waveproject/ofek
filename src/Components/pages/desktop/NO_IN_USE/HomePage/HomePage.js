import React, { Component } from 'react'
import APPIpic from '../../../APPIpic';
import HomeProjects from './HomeProjects';
import Container from '@material-ui/core/Container';

//import md5 from '@js-md5';


export default class HomePage extends Component {

    render() {
        //console.log(localStorage.getItem('path'));

        let page = this.props.pageData.page;


        //console.log(page);

        return (
            
            <div className="HomePage animated fadeIn">
                
                {/* https://material-ui.com/es/api/container/ */}
                
                <section className="section1">
                    <h1>{page.h1}</h1>
                    <APPIpic fullWidth={true} pic={page.home1} alt='תמונת אווירה'/>
                </section>
                
                <section className="HomeProjects" id='HomeProjects'>
                    <Container maxWidth="lg" >
                        <HomeProjects {...this.props} />
                    </Container>
                    
                </section>
                
            </div>
        )
    }
}
