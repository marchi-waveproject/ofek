import React, { Component } from 'react'
import { RestUrls } from "./Urls";

export default class ItemsLI extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
    
      

    async componentDidMount() {

        let API =  RestUrls.Users;
        
        const res = await fetch(API + this.props.query)

        const data = await res.json();
        this.setState(
            {items: data,  isLoaded: true,}

        )

        //console.log();
    }

   
    render() {

        let {isLoaded, items } = this.state;

        if (!isLoaded) {
        return <li>טוען...</li>
        }

        else {
        return  <React.Fragment>
                    {items.map(item => (
                        <li key={item.id} >
                        {item.name} | Email: {item.email}
                        </li>
                    )
                    )}
                    
            </React.Fragment>
        }
    }
}
