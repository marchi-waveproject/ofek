import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import APPIpic from '../../../APPIpic';

import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */


import ShowProj  from './ShowProj';




export default class Center extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          idActive: false
        }
    }
    
    editHandler = (data) => {
        
        //console.log(data);

        if(data) {

           /*  let centerProj = this.props.pageData.centerProj;

            let selectedProj =  centerProj.filter(function(desc) {
                return desc.data.id ===  data;
            }); */

            this.setState({
                idActive : data,
                //items: selectedProj
            });
        }
        
    }


    showActive = (data, props) => {

        //console.log(data);
        
        if(data >= 1) {
            return(
                <ShowProj id={data} {...props} />
            );
        } else return false;
    }


    render() {

        //console.log(this.props);

        let centerProj = this.props.pageData.centerProj;

        //console.log(centerProj);

        return (

            <div className='CenterPage'>

                <header>
                    <h1>{this.props.pageData.page.h1}</h1>
                </header>

                <Container maxWidth="lg" >

                    <nav role='menu' className='items'>
                        
                    {centerProj.map(proj => (
                        <Link role='menuitem' key={proj.data.id} activeClass="active"  onClick={ e => this.editHandler(proj.data.id)} to='ShowSelectedProj' spy={true} smooth={true} isDynamic={true} offset={-130} >
                        
                            <APPIpic pic={proj.data.image} alt={proj.data.name}/>
                            <div className='text'>
                                <h2>{proj.data.name}</h2>
                                <button aria-label={'פרויקט: ' + proj.data.name + ' - לפרטים' }   className='fakeBtn'>קרא עוד ></button>
                            </div>
                        
                        </Link>
                    ))}

                    </nav>

                   {this.showActive(this.state.idActive, this.props)}
                    
                    
                </Container>
            </div>
        )
    }
}

