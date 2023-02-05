import React, { Component } from 'react'
import ShowMigrashData from './ShowMigrashData'; 


export default class Search extends Component {


    render() {

        //console.log(this.props);
        //console.log(this.props.currentState);

        return (
            <div>

                <div className="ShowMigrashData">
                    <table>
                        <tbody>
                            <tr>
                                <th>מיגרש</th>
                                <th>מספר בניין</th>
                                <th>מספר דירה</th>                                
                                <th>קומה</th>
                                
                                <th>חדרים</th>

                                <th>שטח דירה</th>

                                <th>שטח מרפסת/גינה</th>
                                <th>שטח מחסן</th>
                                <th>מספר מחסן</th>
                                <th>מספר חניות</th>
                                <th>הערות</th>

                                <th>מחיר כולל מע״מ</th>
                                <th>תכנית להורדה</th>
                            </tr>
                            
                        {   this.props.currentState.migrashim.map(item => (
                            < ShowMigrashData data={item} states={this.props.currentState} key={item.migrash.id} />
                        )
                        )}
                        </tbody>
                    </table>
                </div>
                    
            </div>
        )
    }
}
