import React, { Component } from 'react'
import CarouselPlans from './CarouselPlans';
import BigPictures  from './../../../BigPictures';

export default class ShowPlans extends Component {


    constructor(props) {

        super(props);

        this.state = {
            items: props.plans,
            rooms: 'בחר חדרים',
            update: false,
            showModal: false,
            picture: false,
            mobile: props.mobile ? props.mobile : false
        }
        
        //console.log(props.rooms);

        this.roomscat = props.rooms;

    }


    updateFormValue = (event) => {

        //console.log(event.target.value);

        let projectsFilter = this.props.plans.filter(function(desc) {
            return desc.data.rooms === event.target.value;
        });

        //console.log(projectsFilter)

        if(projectsFilter.length > 0) {
            this.setState({
                items : projectsFilter,
                update: true
            });
            
        } else {
            this.setState({
                items : this.props.plans,
                update: true
            });
        }
        
    }
    

    showModal = (data) => {
        console.log(data);
        
        this.setState({
            showModal: true,
            picture: data
        });

        //console.log(this.state.showModal);
    }

    checkshowModal = (data) => {

        if(data.image && !this.state.mobile) {
            return  <BigPictures show={this.state.showModal} noModal={()=>this.setState({showModal: false,
                picture: false})} picture={data}/>
        }
        else {
            return false;
        }
    }

    render() {

        let pictures = this.state.items;

        if (pictures[0].data) {

            //console.log(this.roomscat);

            return (
                <div>
                    
                    <div className ="form-group" >
                        <label>מספר חדרים</label>

                        <select className ="form-control"
                            name ="rooms" value ={ this.state.rooms }
                            onChange ={ this.updateFormValue } >
                            <option value=''>בחר...</option>
                            <option value=''>כל החדרים</option>
                           { this.roomscat.map( room => 
                                < option value ={ room } key ={ room }> 
                                { room } חדרים
                                </ option >
                            )}
                        </select >
                    </div >

                    <CarouselPlans pictures={pictures} update={this.state.update} mobile={this.props.mobile} modalData={this.showModal} />

                    {this.checkshowModal(this.state.picture)}
                </div>
            )
        } else {return false}
    }
}



