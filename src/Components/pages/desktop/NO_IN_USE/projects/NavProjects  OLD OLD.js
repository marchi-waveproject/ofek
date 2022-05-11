import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'; 

export default class  extends Component {

    

    render() {

        //console.log(this.props.infoSite.SiteDataitems.ProjetsLow);
        //console.log(this.props.pageData);

        let ProjetsLow = this.props.infoSite.SiteDataitems.ProjetsLow;

        if (ProjetsLow[0].data.id) {
            return (
                <nav className='projectsNav' >
                    {ProjetsLow.map(item => (

                        <NavLink activeClassName='is-active' key={item.data.id} to={"/פרויקטים/" + item.seo.friendly }>{item.data.name}</NavLink>
                    )
                    )}
                </nav>
            )
        }
        else {return false}
    }
}
