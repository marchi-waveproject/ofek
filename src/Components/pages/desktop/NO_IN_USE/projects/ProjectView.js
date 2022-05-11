import React, { Component } from 'react'
import FormConnector from './../../../../Components/forms/FormConnector';
import TextToHtml from './../../../../Components/Texthtml';
import ShowNavElement from './ShowNavElement';
import { ConstantsNames } from "../../../Urls"

import ShowMap from './ShowMap';

import ReactPlayer from 'react-player'

import APPIpic from "./.././../../APPIpic";
/* import Owl from "./.././../../Owl"; */

import MaterialGallery from "./.././../../MaterialGallery";
import ShowPlans from "./ShowPlans";
import MoreProjects from "./MoreProjects";

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
                    < MaterialGallery pictures={data} />
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
                            height='500px'
                            showinfo='0'
                            url={data}
                            light = {true}
                            config={{youtube: {showinfo: 0,playerVars: {showinfo: 0,rel: 0,controls: true,autoplay: true}}}} />
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
                        <ShowMap width='900px' height='500px' data={data} lat={parseFloat(cords[0])} long={parseFloat(cords[1])} />
                    </div>

                </section>
            );
        } else return false;
    }

    showTechnics = (data) => {

        //console.log();

        let Background = ConstantsNames.pic + this.props.pageData.page.bgTechno;
      
        if(data.technics.length > 5) {
            return(

                <section className='technics' style={{backgroundImage: "url(" + Background + ")" }} >
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
                    < ShowPlans plans={pPlans} rooms={pPlansRooms} />
                </section>
            );
        } else return false;
    }
    

    render() {

        let pData = this.props.pageData.project.info;
        let pPictures = this.props.pageData.project.pictures;
        let pPlans = this.props.pageData.project.plans;
        let pPlansRooms = this.props.pageData.project.plansRooms;

        /* console.log(this.props.pageData); */
        //console.log(pPlans);

        return (
            <div className="projectView animated fadeIn" >
                <div className='tableProject'>
                    <div className='navProj col'>
                        <div className='statusProj'>{StatusProj(pData.data.statusProj)}</div>
                        <header>
                            <h1 className='hidden'>{pData.data.name}</h1>
                            <APPIpic showclass='logo' pic={pData.data.logo} alt={pData.data.name} />
                            <h2>{pData.data.slogan}</h2>
                            <div className='text'>
                                <TextToHtml text={pData.data.description} format=""/>
                            </div>
                            
                            <ul className='navigateElements'>
                                
                                <ShowNavElement condition={pPictures[0].data ? true : false } to='gallery' name='גלריה' />
                                <ShowNavElement condition={pData.data.video ? true : false } to='video' name='וידאו' />
                                <ShowNavElement condition={pData.data.map_place ? true : false } to='map' name='מיקום הפרויקט' />
                                <ShowNavElement condition={pData.data.technics ? true : false } to='technics' name='מפרט טכני' />
                                <ShowNavElement condition={pPlans[0].data ? true : false } to='plans' name='תכנית העמדה' />
                                <ShowNavElement condition={ true } to='more' name='פרויקטים נוספים באזור' />
                                
                            </ul>
                        </header>
                    </div>
                    <div className='infoProject col'>
                        
                        {this.showGallery(pPictures)}
                        
                        
                        <section className='formSec'>
                            <TextToHtml text={this.props.infoSite.SiteDataitems.settings.form_title} format="h2"/>
                            <FormConnector pageData={this.props.pageData} infoSite={this.props.infoSite}/>
                        </section>


                        {this.showVideo(pData.data.video)}

                        {this.showMap(pData.data)}

                        {this.showTechnics(pData.data)}

                        {this.showPlans(pPlans,pPlansRooms)}

                        <section className='more'>
                            <h2>פרויקטים נוספים באזור</h2>

                            <MoreProjects {...this.props} config={{items: 3, margin: 10, nav: true, dots: true}} />
                        </section>


                        
                    </div>
                </div>

                
            </div>
        )
    }
}


