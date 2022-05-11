import React, { Component } from 'react'

import HomeProjectCard from './../../desktop/HomePage/HomeProjectCard';
import Container from '@material-ui/core/Container';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { ConstantsNames } from "../../../Urls"
import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */

export default class Projects extends Component {


    constructor(props) {

        super(props);

        this.state = {
            projectType: 'פרויקטים בשיווק'
        }

    }


    editHandler = (data) => {
        
        //console.log(data);

        if(data) {

            this.setState({
                projectType : data,
                projectchange: true
            });
        }       

        scroll.scrollTo(450);
        
    }


   
    render() {
        //console.log(this.state.projectType);
        //console.log(this.props);
        
        let Background = ConstantsNames.pic + this.props.pageData.page.m_homeDown;

        return (
            <div className='AllProjectsPage'>

                <nav  style={{backgroundImage: "url(" + Background + ")" }} >
                  <DropdownButton id="dropdown-basic-button" title={this.state.projectType === 'all' ? 'כל הפרויקטים' : this.state.projectType }>
                      <Dropdown.Item  href="#פרויקטים בשיווק">
                          <button className={this.state.projectType === 'פרויקטים בשיווק' ? 'active' : ''} onClick={() => this.editHandler('פרויקטים בשיווק')} >פרויקטים בשיווק</button>
                      </Dropdown.Item>
                    <Dropdown.Item href="#פרויקטים שאוכלסו">
                          <button className={this.state.projectType === 'פרויקטים שאוכלסו' ? 'active' : ''} onClick={() => this.editHandler('פרויקטים שאוכלסו')} >פרויקטים שאוכלסו</button>
                    </Dropdown.Item>
                      <Dropdown.Item href="#פרויקטים עתידים">
                          <button className={this.state.projectType === 'פרויקטים עתידים' ? 'active' : ''} onClick={() => this.editHandler('פרויקטים עתידים')} >פרויקטים עתידים</button>                        
                      </Dropdown.Item>

                      <Dropdown.Item href="#כל הפרויקטים">
                          <button className={this.state.projectType === 'all' ? 'active' : ''} onClick={() => this.editHandler('all')} >כל הפרויקטים</button>    
                      </Dropdown.Item>
                  </DropdownButton>
                </nav>

                <Container maxWidth="lg" >

                    {this.state.projectType === 'פרויקטים בשיווק' ?
                         <HomeProjectCard type={this.state.projectType} {...this.props} />
                         : false   }
                

                    {this.state.projectType  === 'פרויקטים שאוכלסו' ?
                        <HomeProjectCard type={this.state.projectType} {...this.props} /> 
                        : false
                    }

                    {this.state.projectType  === 'פרויקטים עתידים' ?
                        <HomeProjectCard type={this.state.projectType} {...this.props} /> 
                        : false
                    }

                    {this.state.projectType  === 'all' ?
                        <HomeProjectCard type={this.state.projectType} {...this.props} /> 
                        : false
                    }
                </Container>

                
            </div>
        )
      
    }
}
