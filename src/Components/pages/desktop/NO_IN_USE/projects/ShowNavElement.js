import React, { Component } from 'react'
import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */

export default class ShowNavElement extends Component {


    show = (data,to,name) => {
        
        if(data) {
            return(
                <li>
                    <Link activeClass="active" to={to} spy={true} smooth={true} isDynamic={true} offset={-130} >{name}</Link> 
                </li>
            );
        } else return false;
    }

    render() {
        return (
            <React.Fragment>
                {this.show(this.props.condition, this.props.to, this.props.name )}
            </React.Fragment>
        )
    }
}
