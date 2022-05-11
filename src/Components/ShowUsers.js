import React, { Component } from 'react';
import ItemsLI  from './../Components/ItemsLI';

export default class ShowUsers extends Component {


  render() { return <div>
        
            <ul>
              <ItemsLI query='users' />
            </ul>
        
      </div>
  }

    

}
