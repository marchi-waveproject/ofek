import React, { Component } from 'react'
//import TextToHtml from '../../../Texthtml';
import APPIpic from '../../../APPIpic';
import { ConstantsNames } from "../../../Urls"

//sections
/* import { NavLink } from 'react-router-dom';  */

import Container from '@material-ui/core/Container';

import SearchBar from './../../desktop/BeitShemesh/SearchBar';
import Section1 from './../../desktop/BeitShemesh/Section1';
import City from './../../desktop/BeitShemesh/City';
import MapsPictures from './../../desktop/BeitShemesh/MapsPictures';
import Project from './../../desktop/BeitShemesh/Project';
import PurchaseProcess from './../../desktop/BeitShemesh/PurchaseProcess';
import Mortgage from './../../desktop/BeitShemesh/Mortgage';
import Search from './../../desktop/BeitShemesh/Search';
import ShowBuildingFiles from './../../desktop/BeitShemesh/ShowBuildingFiles';
//import ShowMap from './../../desktop/BeitShemesh/ShowMap';

import GalleryPictures from "./../../desktop/BeitShemesh/GalleryPictures";

import Payments from './../../desktop/BeitShemesh/Payments';

import whitePdf from './../../../../img/icons/white/whitePdf.svg'

export default class BeitShemesh extends Component {

  constructor(props) {

    super(props);
    
    //console.log(this.props);
    let migrashimFilter = this.props.pageData.fullMigrashData.allSortedData.filter(function(desc) {
        return  desc.migrash.title === props.pageData.fullMigrashData.allSortedData[0].migrash.title;
    });

    this.state = {
        migrashim:  migrashimFilter,
        migrash: this.props.pageData.fullMigrashData.allSortedData[0].migrash.title,
        //migrashim:  this.props.pageData.fullMigrashData.allSortedData,
        //migrash: 'בחר מגרש',
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

    render() {

      let page = this.props.pageData.page;
      //let Background = ConstantsNames.pic + page.chooseBuilding;

      let buildings = this.props.pageData.fullMigrashData.allBuildings;

      let doccumentsFiles = this.props.pageData.fullMigrashData.allFiles;

      let currentBuilding = this.state.buildingData.id;

      let tochniotBinian = this.props.pageData.fullMigrashData.allTochniotBinian.filter(function(desc) {
          return desc.building_id ===  currentBuilding;
      });

      return (
          
        <div className='BeitShemesh'>

          <header className="topheader">
              <APPIpic showclass={false} pic={page.m_section1} alt={page.h1} fullWidth={true} />
              <SearchBar  currentState={this.state} Migrashim={this.props.pageData.fullMigrashData} {...this.props} submit={ this.submitData } />
          </header>

          <section className="section1">
              <Section1 page={page} gallery={this.props.pageData.galleryTop} mobile={true} />
          </section>

          <section className="city">
              <City pageData={this.props.pageData} mobile={true} />
          </section>

          <section className="MapsPictures"  >
              <MapsPictures page={page} gallery={this.props.pageData.galleryMapsPictures} mobile={true} />
          </section>

          <section className="project">
              <Project pageData={this.props.pageData} mobile={true} />
              <GalleryPictures first={page.m_projectBg} pictures={this.props.pageData.moreProjectPic} mobile={true} />
              {/* <APPIpic showclass={false} pic={page.m_projectBg} alt='' fullWidth={true} /> */}
          </section>

          <section className="purchaseProcess">
              <PurchaseProcess pageData={this.props.pageData} />
          </section>

          <section className="payments">
                <Payments pageData={this.props.pageData} />
        </section>

          <section className="Mortgage">
              <Mortgage pageData={this.props.pageData}  mobile={true} />
          </section>

          <section className="Prices">
              <Container maxWidth="lg" >
                <h2>מחירון</h2>
              </Container>
              <SearchBar  showMigrasQuads={true} currentState={this.state} Migrashim={this.props.pageData.fullMigrashData} {...this.props} submit={ this.submitData } />
              <Search currentState={this.state} Migrashim={this.state.migrashim} />
          </section>

          <section className="DeppartmentFile">
              <div className="buidingsFiles">
                  <Container maxWidth="lg" >
                      {/* ID {this.state.building} */}
                      <h2>{page.buidingsFiles_h2}</h2>
                      <h3>ביניין: {this.state.buildingData.title} - <small> ({this.state.buildingData.migrash_name})</small></h3>
                      
                      <div className ="form-group changeBuildSelect" >
                          <select className ="form-control"
                              name ="building" value ={ this.state.buildingTitle }
                              onChange ={ this.Changebuilding } >
                              <option value='1'>בחר ביניין אחר</option>
                              
                              {   buildings.map( building => 
                                  < option value ={ building.id } value2='sebas' key ={ building.id }> 
                                  { building.migrash_name + ' - ביניין:' + building.title }
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

          {/* <section className="MapSection">
              <ShowMap width='100%' height='400px' data={{logo:page.mapLogo, name: page.h1 }} lat={31.719065} long={34.995183} />
          </section> */}

        </div>

      )
    }
}
