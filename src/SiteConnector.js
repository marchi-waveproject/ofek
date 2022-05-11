import React, { Component } from 'react'
import Desktop from './Desktop';
import Mobile from './Mobile';


export default class SiteConnector extends Component {
   
    constructor(props) {
        
        //console.log(props.pictures)

        super(props);

        this.state = {
            accessibilityClass: 'noneCss',
            zoomClass: 'noneZoom',
            linksClass: 'noLInks',
            fontsClass: 'noFonts',
        }
    }

    async componentDidMount() {
       
        if (localStorage.getItem('accessibilityClass')) {
            this.setState({accessibilityClass: localStorage.getItem('accessibilityClass')})
        }

        if (localStorage.getItem('zoomClass')) {
            this.setState({zoomClass: localStorage.getItem('zoomClass')})
        }

        if (localStorage.getItem('linksClass')) {
            this.setState({linksClass: localStorage.getItem('linksClass')})
        }

        if (localStorage.getItem('fontsClass')) {
            this.setState({fontsClass: localStorage.getItem('fontsClass')})
        }
    }



    changeAccessibilityClass = (data) => {
        if(data) {

            var changeClass='';

            //if(this.state.accessibilityClass.includes("accessibility")) {

            //console.log(this.state);

            if(data === 'accessibility') {
                if(this.state.accessibilityClass === "accessibility") {
                    changeClass = data.replace("accessibility", " ");
                }

                else {
                    changeClass = 'accessibility';
                }

                this.setState({accessibilityClass: changeClass})
                localStorage.setItem('accessibilityClass', changeClass);
            }


            else if(data === 'zoomIn') {
                if(this.state.zoomClass === "zoomIn") {
                    changeClass = data.replace("zoomIn", " ");
                }

                else {
                    changeClass = 'zoomIn';
                }

                this.setState({zoomClass: changeClass})
                localStorage.setItem('zoomClass', changeClass);
            }


            else if(data === 'linksOn') {
                if(this.state.linksClass === "linksOn") {
                    changeClass = data.replace("linksOn", " ");
                }

                else {
                    changeClass = 'linksOn';
                }

                this.setState({linksClass: changeClass})
                localStorage.setItem('linksClass', changeClass);
            }

            else if(data === 'fontsOn') {
                if(this.state.fontsClass === "fontsOn") {
                    changeClass = data.replace("fontsOn", " ");
                }

                else {
                    changeClass = 'fontsOn';
                }

                this.setState({fontsClass: changeClass})
                localStorage.setItem('fontsClass', changeClass);
            }


            



            

            
            //console.log(data);
        }
        
    }
    
    render() {


        let page = this.props.page;
        let pageClass = page.replace('/',"_");

        //console.log(this.props);

        if (this.props.info.media === 'mobile') {
            
            return <Mobile {...this.props}

            accesStates={this.state}

            pageClass={
                pageClass + ' mobile ' + 
                this.state.accessibilityClass +  ' ' +
                this.state.zoomClass +  ' ' +
                this.state.linksClass +  ' ' +
                this.state.fontsClass 
            } accessibility={this.changeAccessibilityClass} />
        }

        else {
            return <Desktop {...this.props}
            accesStates={this.state}
            pageClass={
                pageClass + ' desktop '  +
                this.state.accessibilityClass + ' ' +
                this.state.zoomClass +  ' ' +
                this.state.linksClass +  ' ' +
                this.state.fontsClass 
            }  accessibility={this.changeAccessibilityClass} />
        }
    }
}
