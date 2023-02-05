import React, { Component } from 'react';
import SiteConnector  from './SiteConnector';
//import Test  from './test';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm install react-router-dom
import { isMobile } from "react-device-detect"; //npm install react-device-detect //https://www.npmjs.com/package/react-device-detect
import { RestUrls } from "./Components/Urls"
import { getId } from "./Components/getId"
import Loading from './Components/utils/Loading';
import { toast } from 'react-toastify';

//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/material @mui/styled-engine-sc styled-components


//import {getAllUrlParams} from "./Components/getAllUrlParams"

//import logo from './logo.svg';
//import './App.css';

/* import { ConstantsNames } from "./Urls";*/


export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      media: isMobile ? 'mobile' : 'desktop',
      lang: 'he',
      SiteDataitems: [],
      isReady: false,
      formData: {}
    } 
  }

 

  async componentDidMount() {

    const API =  RestUrls.SiteData;
        

    console.log(API);

    try {

      //const res = await fetch(API)

      const res = await fetch(API, {
        method: "GET",
        headers: {
        "Content-Type" : 'application/json',
        "Accept" : 'application/json'
        },
        //body: JSON.stringify(items)
    });

      const data = await res.json();


      this.setState(
          {SiteDataitems: data,
            isReady: true}
      )

    } catch (e) {

      toast.error('שגיאה בשרת');      
      console.log('error', e);
      
  }
  
}
  

  
  render() {
    
    
    
    if(this.state.isReady) {
      
        //let ProjetsLow = this.state.SiteDataitems.ProjetsLow;
        /* console.log(ProjetsLow);     */
        /* console.log(this.state); */

        return <React.Fragment>
            
          <Router>
          
            <Route path={"/"} component={getId} />

            <Switch>
              <Route exact path="/" component={() => <SiteConnector  page="welcome/homepage" info={this.state} />} />

              
              {this.state.SiteDataitems.pages.map(pageData => (
                <Route 
                  key={pageData.id} exact path={'/' + pageData.seo.friendly}
                  component={() => <SiteConnector idProj={this.getId} page={pageData.seo.controller + '/' +  pageData.seo.method}
                  info={this.state} />}/>  
              )
              )}
              
              
              {/* {ProjetsLow.map(projectsData => (
                  
                <Route 
                    key={'proj' + projectsData.data.id } exact path={ConstantsNames.projectsPageName + projectsData.seo.friendly }
                    component={() => <SiteConnector  page={'welcome/project'}  friendProj={projectsData.seo.friendly} info={this.state}  />}/>  
                )
              )} */}

              {/* <Route path={ConstantsNames.centerPageName + ':id'} component={() => <SiteConnector  page="welcome/center" info={this.state} />} /> */}

              <Route component={() => <SiteConnector  page="welcome/error404Page" info={this.state} />} />

            </Switch>
            
          </Router>
            
          </React.Fragment>
    } else {

    return <div>
      <Loading open={true} noBackdrop={false} />
    </div>

    }


  }

    

}
