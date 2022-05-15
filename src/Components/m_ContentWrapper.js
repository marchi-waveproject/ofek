import React, { Component } from 'react'
//import ShowUsers  from './ShowUsers';
import Seo from './../Seo';
import Nav  from '../Components/pages/mobile/Nav';
import { RestUrls } from "../Components/Urls";

import BeitShemesh  from './pages/mobile/BeitShemesh/BeitShemesh';

/* import Projects  from './pages/mobile/projects/Projects';
import ProjectView from './pages/mobile/projects/ProjectView';
import Contact  from './pages/mobile/Contact/Contact';
import Articles  from './pages/mobile/Articles/Articles';
import About  from './pages/mobile/About/About';
import Center  from './pages/mobile/Center/Center';
import Jobs  from './pages/mobile/Jobs/Jobs';
import Calc  from './pages/desktop/Calc/Calc'; */

import Accessibility  from './pages/mobile/Accessibility/Accessibility';
import HomePage from './pages/desktop/HomePage/HomePage';
import Page404  from './pages/Page404';


export default class ContentWrapper extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
          items: [],
          isLoaded: false,
        }

        
      }


      async componentDidMount() {
        
        const pageName = this.props.page === 'welcome/project' ? 'welcome/' + this.props.friendProj : this.props.page;
        let API =  RestUrls.Pages + pageName + RestUrls.Code;

        const res = await fetch(API)

        /* console.log(API);
        console.log(res); */

        const data = await res.json();

        this.setState(
            {items: data,  isLoaded: true,}

        )

        //console.log(this.props.items);
    }



    render() {

        //console.log(this.props.idProj);

        let {isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>טוען...</div>
        }

        else {

        
            switch (this.props.page) {

                case "welcome/beitShemesh":
                    return (
                        <React.Fragment>
                            <Seo infoSite={this.props.info} pageData={items} />
                            <Nav info={this.props.info} className="element" />
                            <BeitShemesh pageData={items} infoSite={this.props.info} />
                        </React.Fragment>
                    )


                case "welcome/homepage":
                    return (
                        <React.Fragment>
                            <HomePage infoSite={this.props.info} pageData={items} />
                        </React.Fragment>
                    )

                case "welcome/accessibility":
                    return (
                        <React.Fragment>
                            <Seo infoSite={this.props.info} pageData={items} />
                            <Accessibility pageData={items} {...this.props} />
                        </React.Fragment>
                    )

                case "welcome/error404Page":
                    return (
                        <React.Fragment>
                            <Seo infoSite={this.props.info} pageData={items} />
                            <Page404 />
                        </React.Fragment>
                    )

                default:
                    return (
                        <div>DEFAULT CASE  Page1</div>
                    )
            }

        }
    }
}
