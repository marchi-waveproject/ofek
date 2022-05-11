import React, { Component } from 'react'
import { Link } from 'react-scroll'  /* https://www.npmjs.com/package/react-scroll */

import lupa from './../../../../img/icons/black/lupaBlack.svg'
//import NumberFormat from 'react-number-format';
export default class SearchBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            migrashim:  props.currentState.migrashim,
            //migrash: 'בחר מגרש',
            migrash: props.currentState.migrash,
            rooms: false,
            prices: false
        }
    }


    editHandler = (event) => {
        
        if(event.target.name === 'migrash') {

            let migrashimFilter = this.props.Migrashim.allSortedData.filter(function(desc) {
                return desc.migrash.title === event.target.value;
            });
    
            if(migrashimFilter.length > 0) {
                this.setState({migrashim : migrashimFilter, migrash: event.target.value}, () => this.props.submit(this.state) );
            } else {this.setState({migrashim : this.props.Migrashim.allSortedData, migrash: event.target.value}, () => this.props.submit(this.state) );}

        }

        else {
            this.setState({ [event.target.name]: event.target.value }, () => this.props.submit(this.state) )
        }
    }

    changeMigrash = (migrash) => {

        let migrashimFilter = this.props.Migrashim.allSortedData.filter(function(desc) {
            return desc.migrash.title === migrash;
        });

        if(migrashimFilter.length > 0) {
            this.setState({migrashim : migrashimFilter, migrash: migrash}, () => this.props.submit(this.state) );
        } else {this.setState({migrashim : this.props.Migrashim.allSortedData, migrash: migrash}, () => this.props.submit(this.state) );}
        
    }


    updateFormValueCheck = (event) => {
        this.setState({ [event.target.name]: event.target.checked }, () => this.props.submit(this.state));
    }



    render() {

        //console.log(this.props.currentState.migrash);

        let Migrashim = this.props.Migrashim;

        return (
            <div className="searchBar">
                <div className="contsearchBar">
                    <h2>חיפוש דירה</h2>

                    <div className="inputsContent">
                        <div className="clear">
                            <div className ="form-group" >
                                {/* <label>מיגרשים</label> */}
                                <select className ="form-control"
                                    name ="migrash" value ={ this.props.currentState.migrash }
                                    onChange ={ this.editHandler }  >
                                    <option value=''>כל המגרשים</option>
                                    <option value=''>בחר מגרש</option>
                                    { Migrashim.allMigrashim.map( migrash => 
                                        < option value ={ migrash.title } key ={ migrash.id }> 
                                        { migrash.title }
                                        </ option >
                                    )}
                                </select >
                            </div >

                            <div className ="form-group" >
                                {/* <label>מיגרשים</label> */}

                                <select className ="form-control"
                                    name ="rooms" value ={  this.props.currentState.rooms }
                                    onChange ={ this.editHandler }  >
                                    <option value=''>בחר מספר חדרים</option>
                                    <option value=''>כל החדרים</option>
                                    { Migrashim.allRooms.map( rooms => 
                                        < option value ={ rooms } key ={ rooms }> 
                                        { rooms + ' חדרים' }
                                        </ option >
                                    )}
                                </select >
                            </div>


                            <div className ="form-group" >
                                {/* <label>מיגרשים</label> */}

                                <select className ="form-control"
                                    name ="prices" value ={  this.props.currentState.prices }
                                    onChange ={ this.editHandler }  >
                                    <option value=''>בחר מחיר</option>
                                    <option value=''>כל מחירים</option>
                                    
                                    <option value='900000'>דירות עד 900,000 ש״ח</option>
                                    <option value='1000000'>דירות עד 1,000,000 ש״ח</option>
                                    <option value='1100000'>דירות עד 1,100,000 ש״ח</option>
                                    <option value='1200000'>דירות עד 1,200,000 ש״ח</option>
                                    <option value='1300000'>דירות עד 1,300,000 ש״ח</option>
                                    <option value='1400000'>דירות עד 1,400,000 ש״ח</option>
                                    <option value='1500000'>דירות עד 1,500,000 ש״ח</option>

                                </select >
                                {/* <select className ="form-control"
                                    name ="prices" value ={  this.props.currentState.prices }
                                    onChange ={ this.editHandler }  >
                                    <option value=''>בחר מחיר</option>
                                    <option value=''>כל מחירים</option>
                                    { Migrashim.allPrices.map( prices => 
                                        < option value ={ prices } key ={ prices }> 
                                        { prices + ' ש״ח' }
                                        </ option >
                                    )}
                                </select > */}
                            </div>
                            <div className="downFilters">
                                <div className ="form-group" >
                                    <div className ="form-check" >
                                        < input className ="form-check-input"
                                        type ="checkbox" name ="available"
                                        checked ={this.props.currentState.available } 
                                        onChange ={this.updateFormValueCheck }
                                        />
                                        <label className ="form-check-label" >הצג רק דירות פנויות</label >
                                    </div>
                                </div >

                               {/*  <div className ="form-group" >
                                    <div className ="form-check" >
                                        < input className ="form-check-input"
                                        type ="checkbox" name ="noMishtaken"
                                        checked ={this.props.currentState.noMishtaken}
                                        onChange ={ this.updateFormValueCheck }
                                        />
                                        <label className ="form-check-label" >שוק חופשי</label >
                                    </div>
                                </div > */}
                            </div>
                        </div>
                    </div>
                    
                    <Link href="#" className="lupaBtn" activeClass="is-active" to='ShowMigrashData' spy={true} smooth={true} isDynamic={true} offset={-165} >
                        <img src={lupa} alt='זכוכית מגדלת' />
                    </Link> 
                </div>
                

                {   this.props.showMigrasQuads ? 
                    <div className="migrasQuads">
                        { Migrashim.allMigrashim.map( migrash => 
                            < a onClick={() => this.changeMigrash(migrash.title) } className={this.state.migrash === migrash.title ?  "quad active" : "quad"} href="#quad" key ={ migrash.id }> 
                            { migrash.title }
                            </a >
                        )}
                    </div> : false
                }
            </div>
        )
    }
}
