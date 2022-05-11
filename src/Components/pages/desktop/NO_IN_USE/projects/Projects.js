import React, { Component } from 'react'
import HomeProjectCard from './../HomePage/HomeProjectCard';
import Container from '@material-ui/core/Container';


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
        
    }


   
    render() {
        //console.log(this.state.projectType);
        //console.log(this.props);
        return (
            <div className='AllProjectsPage'>
                <nav>
                    <button className={this.state.projectType === 'פרויקטים בשיווק' ? 'active' : ''} onClick={() => this.editHandler('פרויקטים בשיווק')} >פרויקטים בשיווק</button>
                    <button className={this.state.projectType === 'פרויקטים שאוכלסו' ? 'active' : ''} onClick={() => this.editHandler('פרויקטים שאוכלסו')} >פרויקטים שאוכלסו</button>
                    <button className={this.state.projectType === 'פרויקטים עתידים' ? 'active' : ''} onClick={() => this.editHandler('פרויקטים עתידים')} >פרויקטים עתידים</button>
                    <button className={this.state.projectType === 'all' ? 'active' : ''} onClick={() => this.editHandler('all')} >כל הפרויקטים</button>
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
