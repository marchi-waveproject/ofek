import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import APPIpic from '../../../APPIpic';
import { ConstantsNames } from "../../../Urls"

import SearchBar from './SearchBar';
import Search from './Search';
import Section1 from './Section1';
import City from './City';
import MapsPictures from './MapsPictures';

import { animateScroll as scroll, } from 'react-scroll' /* https://www.npmjs.com/package/react-scroll */

import Project from './Project';
import PurchaseProcess from './PurchaseProcess';

import Payments from './Payments';

import Mortgage from './Mortgage';

//import ShowMap from './ShowMap';

import BuildingButton from './BuildingButton';
import ShowBuildingFiles from './ShowBuildingFiles';

import whitePdf from './../../../../img/icons/white/whitePdf.svg'
import TextToHtml from './../../../Texthtml';
import { Fragment } from 'react';

export default class ShirTower extends Component {

    /* https://ofek-sheli-mishtaken.vercel.app/שיר_טאוורס */

    // http://localhost:3000/שיר_טאוורס

    constructor(props) {

        super(props);
        
        //console.log(this.props);

        let migrashimFilter = this.props.pageData.fullMigrashData.allSortedData.filter(function(desc) {
            return  desc.migrash.title === props.pageData.fullMigrashData.allSortedData[0].migrash.title;
        });

        this.state = {
            migrashim:  migrashimFilter,
            //migrashim:  this.props.pageData.fullMigrashData.allSortedData,
            //migrash: 'בחר מגרש',
            migrash: 'כותרת', //this.props.pageData.fullMigrashData.allSortedData[0].migrash.title,
            rooms: false,
            prices: false,
            noMishtaken: false,
            available: false,
            buildingData: this.props.pageData.fullMigrashData.allBuildings[0]
        }
    }

    submitData = (newData) => {
        this.setState(newData);
    }

    Changebuilding = (event) => {
        
        let buildings = this.props.pageData.fullMigrashData.allBuildings;

        let buildingDataNew = buildings.filter(function(desc) {
            return desc.id === event.target.value;
        });

        this.setState({
            buildingData: buildingDataNew[0]
        })

        //console.log(event.target.value);
        //console.log(buildingData);
        
    }


    selectTochniotByPicture = (building) => {

        this.setState({buildingData: building});
        scroll.scrollMore(600);
    }


    


    render() {
        
        let page = this.props.pageData.page;
        let Background = ConstantsNames.pic + page.chooseBuilding;

        let buildings = this.props.pageData.fullMigrashData.allBuildings;

        let doccumentsFiles = this.props.pageData.fullMigrashData.allFiles;

        //let currentBuilding = this.state.buildingData.id;

        /* let tochniotBinian = this.props.pageData.fullMigrashData.allTochniotBinian.filter(function(desc) {
            return desc.building_id ===  currentBuilding;
        }); */

        const tochniotBinian = false;
        

        return (
            <div className='BeitShemesh BlueWave'>
                
                <header className="topheader">
                    <APPIpic showclass={false} pic={page.section1} alt={page.h1} fullWidth={true} />
                    <SearchBar  currentState={this.state} Migrashim={this.props.pageData.fullMigrashData} {...this.props} submit={ this.submitData } />
                </header>

                <section className="section1">
                    <Section1 page={page} gallery={this.props.pageData.galleryTop} mobile={false} />
                </section>

                {false && <Fragment>
                    <section className="city">
                        <City pageData={this.props.pageData} mobile={false} />
                    </section>

                    <section className="MapsPictures"  >
                        <MapsPictures page={page} gallery={this.props.pageData.galleryMapsPictures} />
                    </section>

                    <section className="project">
                        <Project pageData={this.props.pageData} />
                    </section>

                    <section className="purchaseProcess">
                        <PurchaseProcess pageData={this.props.pageData} />
                    </section>

                    <section className="payments">
                        <Payments pageData={this.props.pageData} />
                    </section>

                    <section className="Mortgage">
                        <Mortgage  pageData={this.props.pageData} />
                    </section>

                    <section className="Prices">
                        <Container maxWidth="lg" >
                            <h2>מחירון</h2>
                        </Container>
                        <SearchBar  showMigrasQuads={false} currentState={this.state} Migrashim={this.props.pageData.fullMigrashData} {...this.props} submit={ this.submitData } />
                        <Search currentState={this.state} Migrashim={this.state.migrashim} />
                    </section>

                    <section className="DeppartmentFile">
                        
                        <div className="buidingsFiles">
                            <Container maxWidth="lg" >
                                <h3>ביניין: {this.state.buildingData.title} - <small> ({this.state.buildingData.migrash_name})</small></h3>
                                
                                <div className ="form-group changeBuildSelect" >
                                    <select className ="form-control"
                                        name ="building" value ={ this.state.buildingTitle }
                                        onChange ={ this.Changebuilding } >
                                        <option value='1' >בחר ביניין אחר</option> 

                                        {   buildings.map( building => 
                                            < option value ={ building.id } value2='sebas' key ={ building.id }> 
                                            { building.migrash_name + ' - ביניין: ' + building.title }
                                            </ option >
                                        )}
                                    </select >
                                </div >

                                <div className="tableFiles">
                                    <div className="RowtableFiles">
                                        <div className="col title">תוכנית קומה</div>
                                        <div className="col title">תוכנית דירה</div>
                                    </div>
                                    <ShowBuildingFiles tochniotBinian={tochniotBinian} />
                                </div>

                            </Container>
                        </div>
                    </section>

                    <section className="DoccumentsFiles">
                            <Container maxWidth="lg" >
                                <h2>{page.h2_files}</h2>
                                <div className="allFiles">
                                    { doccumentsFiles.map( files =>
                                        <a key={files.id} href={ ConstantsNames.files + files.file} rel="noopener noreferrer" target='_blank' >
                                            <img src={whitePdf} alt='PDF LOGO' />
                                            {files.title}
                                        </a>
                                    )}
                                </div>
                            </Container>

                    </section>
                </Fragment> }
                
                

                   {/*  <section className="MapSection">
                        <ShowMap width='100%' height='400px' data={{logo:page.mapLogo, name: page.h1 }} lat={31.719065} long={34.995183} />
                    </section> */}

                    
            </div>
        )
    }
}
