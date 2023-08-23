import React, { Component } from 'react'
import Showfiles from './Showfiles';

export default class ShowBuildingFiles extends Component {
    render() {


        let tochniotBinian = this.props.tochniotBinian;
        //console.log(tochniotBinian[0].floors);

        if(tochniotBinian[0]) {

            return (
                <React.Fragment>
                    {  tochniotBinian[0].floors.map( floor =>
                    <div className="RowtableFiles" key={floor} >
                        <div className="col">
                            { tochniotBinian[0].Alltochniot.map( files =>
                                <Showfiles col='koma' floor={floor} data={files} key={files.id} />
                            )}
                        </div>
                        <div className="col">
                            { tochniotBinian[0].Alltochniot.map( files =>
                                <Showfiles col='dira' floor={floor} data={files} key={files.id} />
                            )}
                        </div>
                    </div>
                    )}
                </React.Fragment>
            )
        }

        else {
            return false;
        }
    }
}
