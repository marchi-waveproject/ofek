import React, { Component } from 'react'
import TrTable from './TrTable'; 

export default class ShowMigrashData extends Component {

    
    buildings = (building, info) => {


        //console.log(building);


        // VER EN CHABAD SHOWPEOPLE PARA PONER * NO RECORDS *

        let departments = building.departments;

        if(building) {
                if(departments) {

                        return departments.map(department => (
                        <TrTable info={info}
                                key={department.id}
                                price={parseInt(department.price) <= parseInt(info.states.prices) || !info.states.prices ? true : false}
                                rooms={department.rooms === info.states.rooms || !info.states.rooms ? true : false}
                                noMishtaken={(info.states.noMishtaken && department.is_not_mishtake === '1') || !info.states.noMishtaken ? true : false}
                                available={(info.states.available && department.is_sold !== '1') || !info.states.available ? true : false}
                                department={department}
                                building={building}
                        />
                        ))
                }
                else {
                    return <tr key={Math.floor(Math.random() * 100000)}>
                    <td colSpan='13'>אין נתונים לחיפוש</td>
                </tr>
                }
        }

       
    }


    render() {

        //let migrash = this.props.data.migrash
        let buildings = this.props.data.buildings ? this.props.data.buildings : false;

        return <React.Fragment>
                    { buildings ? buildings.map(building => ( this.buildings( building, this.props) ) ) : false }
                </React.Fragment>
    }
}


/* { this.state.migrashim.map(item => (
    < ShowMigrashData data={item} key={item.migrash.id} />
)
)} */