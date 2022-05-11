import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import FormConnector from './../../../../Components/forms/FormConnector';
import TextToHtml from './../../../../Components/Texthtml';
import { ConstantsNames } from "../../../Urls"
import APPIpic from "./.././../../APPIpic";

import ShowMap from './../../desktop/projects/ShowMap';
//import ShowNavElement from './../../desktop/projects/ShowNavElement';
//import MaterialGallery from "./.././../../MaterialGallery";
import ShowPlans from "./../../desktop/projects/ShowPlans";
import MoreProjects from "./../../desktop/projects/MoreProjects";

import Owl from "./.././../../Owl";

import Maskyoo from "./../../../Maskyoo";

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



//import NavProjects from './NavProjects.js';


export default class ProjectView extends Component {

    showGallery = (data) => {
        //console.log(data)
        if(data[0].data) {
            return(
                <section className='gallery'>
                    < Owl pictures={data} config={{mobile:true, items: 1, stagePadding:70, margin: 10, nav: false, dots: true}} />
                </section>
            );
        } else return false;
    }

    showVideo = (data) => {
        //console.log(data)
        if(data.length > 5) {
            return(
                <section className='video'  >

                    <h2>סרטון על הפרויקט</h2>

                    {/* https://www.npmjs.com/package/react-player */}
                    
                    <ReactPlayer
                            className='projVideo'
                            /* width='900px' */
                            width='100%'
                            height='160px'
                            showinfo='0'
                            url={data}
                            light = {true}
                            config={{youtube: {showinfo: 0,playerVars: {showinfo: 0,rel: 0,controls: false,autoplay: true}}}} />
                </section>
            );
        } else return false;
    }



    showMap = (data) => {

        var cords = data.map_place.split(',');
        //console.log(res);

        //console.log(data)
        if(data.map_place.length > 5) {
            return(
                <section className='map'  >

                    <h2>מיקום הפרויקט</h2>
                    <p>{data.place_text}</p>
                    
                    <div className="MapShow" >
                        <ShowMap width='100%' height='400px' data={data} lat={parseFloat(cords[0])} long={parseFloat(cords[1])} />
                    </div>

                </section>
            );
        } else return false;
    }

    showTechnics = (data) => {

        //console.log();
        let site = this.props.infoSite.SiteDataitems;
        let Background = ConstantsNames.pic + site.settings.m_footer_bg;
        
        //let Background = ConstantsNames.pic + this.props. site.settings.m_footer_bg;
        if(data.technics.length > 5) {
            return(

                <section className='m_technics' style={{backgroundImage: "url(" + Background + ")" }} >
                    <h2>מפרט טכני</h2>
                    <TextToHtml text={data.technics} format=""/>
                </section>
            );
        } else return false;
    }

   

    showPlans = (pPlans,pPlansRooms) => {
        //console.log(pPlans);
        //console.log(pPlansRooms);
        if(pPlans[0].data) {
            return(
                <section className='plans'>
                    <h2>תכנית העמדה</h2>
                    < ShowPlans plans={pPlans} rooms={pPlansRooms} mobile={true} />
                </section>
            );
        } else return false;
    }
    

    render() {

        let pData = this.props.pageData.project.info;
        let pPictures = this.props.pageData.project.pictures;
        let pPlans = this.props.pageData.project.plans;
        let pPlansRooms = this.props.pageData.project.plansRooms;

        //console.log(this.props);

        let site = this.props.infoSite.SiteDataitems;
        let Background = ConstantsNames.pic + site.settings.m_footer_bg;

        //console.log(this.props);
        //console.log(pPlans);

        return (
            <div className="projectView animated fadeIn" >
                <header>
                    <h1>{pData.data.name}</h1>
                    <APPIpic fullWidth={true} pic={pData.data.smallPic} alt={pData.data.name} />
                    <div className='statusProj'>{StatusProj(pData.data.statusProj)} </div>
                </header>


                <div className='infoProject'>

                    <APPIpic showclass='logo' pic={pData.data.logo} alt={pData.data.name} />
                    <h2 className='logoDown' >{pData.data.slogan}</h2>
                    <div className='text'>
                        <TextToHtml text={pData.data.description} format=""/>
                    </div>

                    
                    {this.showGallery(pPictures)}
                    
                    <footer className='site-footer yes'>
                        <section className='formSec goToThis' style={{backgroundImage: "url(" + Background + ")" }} >
                            <TextToHtml text={site.settings.m_form_title} format="h2"/>
                            <FormConnector pageData={this.props.pageData} infoSite={this.props.infoSite}/>
                        </section>
                    </footer> 


                    {this.showVideo(pData.data.video)}

                    {this.showMap(pData.data)}

                    {this.showTechnics(pData.data)}

                    {this.showPlans(pPlans,pPlansRooms)}

                    <section className='more'>
                        <h2>פרויקטים נוספים באזור</h2>

                        <MoreProjects {...this.props} config={{items: 1, margin: 10, stagePadding: 20, nav: false, dots: true}} />
                    </section>

                </div>
                
                <Maskyoo {...this.props} />
                
            </div>
        )
    }
}


