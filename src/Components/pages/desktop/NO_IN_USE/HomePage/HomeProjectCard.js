import React, { Component } from 'react'
import APPIpic from '../../../APPIpic';
import { NavLink } from 'react-router-dom';
import Multiplecheck from './Multiplecheck';
import { animateScroll as scroll, } from 'react-scroll'
import Button from '@material-ui/core/Button';

function StatusProj(status) {
    if(status==='פרויקטים שאוכלסו') {
        return 'אוכלס';
    }
    else if(status==='פרויקטים בשיווק') {
        return 'בשיווק'
    }
    else if(status==='פרויקטים עתידים') {
        return 'בקרוב'
    }
    else {
        return '?'
    }
}
    


export default class HomeProjectCard extends Component {

    constructor(props) {

        let projects = props.infoSite.SiteDataitems.ProjetsLow;

        super(props);

        if(props.type !== 'all') {

            //console.log(projects);
            
            let projectsFilter =  projects.filter(function(desc) {
                return desc.data.statusProj === props.type;
            });

            this.state = {
                items: projectsFilter,
                city: ['default']
              }

        }

        else {
            this.state = {
                items: projects,
                city: ['default']
              }
        }

        this.cities = props.infoSite.SiteDataitems.cities;

      }
      


      changeProjectsArray = (props,cities) => {
        
        let projects = props.infoSite.SiteDataitems.ProjetsLow;

        let projectsFilter =  projects.filter(function(desc) {
            return (
                desc.data.city === cities[0] ||  desc.data.city === cities[1] ||
                desc.data.city === cities[2] ||  desc.data.city === cities[3] ||
                desc.data.city === cities[4] ||  desc.data.city === cities[5] ||
                desc.data.city === cities[6] ||  desc.data.city === cities[7] 
                );
        });

        
        this.setState({items : projectsFilter});
          
      }

      

      updateProjectsArrray = (cities) => {
         
          if(cities.length >= 1) {
            this.changeProjectsArray(this.props,cities)
          }
          else {

                let projects = this.props.infoSite.SiteDataitems.ProjetsLow;
                
                let projectsFilter =  projects.filter(function(desc) {
                    return desc.data.statusProj === 'פרויקטים בשיווק';
                });


                this.setState({items :projectsFilter});
                
          }
          
      }


    render() {

        let {items} = this.state;

        //console.log(this.state);
        
        return (
            <div>

            <Multiplecheck updateProjectsArrray={this.updateProjectsArrray} cities={this.props.infoSite.SiteDataitems.cities} />

                          

                <div className='items  animated fadeIn'>
                    {items.map(item => (
                        <NavLink  onClick={() => scroll.scrollTo(0)} className='HomeProjectCard' activeClassName='is-active' key={item.data.id} to={"/פרויקטים/" + item.seo.friendly }>
                            <APPIpic pic={item.data.smallPic} alt={item.data.name}/>
                            <div className='text'>
                                {/*console.log(item)*/}
                                <h2>{item.data.name} ב{item.data.city} | <small>{StatusProj(item.data.statusProj)}</small></h2>
                                <Button aria-label={'פרויקט: ' + item.data.name + ' - לפרטים'} variant="contained" >קרא עוד ></Button>
                            </div>
                        </NavLink>
                    )
                    )}
                </div>
            </div>
            
        )
    }
}
