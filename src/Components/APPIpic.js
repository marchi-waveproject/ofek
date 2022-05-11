import React, { Component } from 'react'
import { ConstantsNames as pathUrl } from "../Components/Urls"

function picUrl(pic,ismobile) {
    
    if(pic && pic.data) {
        //console.log(pic)
        if(ismobile && pic.data.m_image) {
            return pathUrl.pic + pic.data.m_image;
        }
        else {
            return pathUrl.pic + pic.data.image;
        }
        

        
    }

    else if (pic) {
        return pathUrl.pic + pic;
    }

    else {
        return '';
    }
    
}

function picAlt(props) {
    
    if (props.pic && props.pic.data) {
        return props.pic.data.alt;
    }
    else if(props.alt) {
        return props.alt;
    }
    else {
        return  '';
    }

    
}

export default class APPIpic extends Component {

    
    render() {
        //console.log(this.props);

        if (this.props.fullWidth) {
            return (
                <img className={this.props.showclass ? 'fullWidth ' + this.props.showclass : 'fullWidth'  } src={picUrl(this.props.pic,this.props.mobile)+'?v=' + pathUrl.version} alt={picAlt(this.props)}  />
            )
        }

        else {
            return ( 
                <img className={this.props.showclass ? this.props.showclass : '' } src={picUrl(this.props.pic,this.props.mobile)+'?v=' + pathUrl.version } alt={picAlt(this.props)} />
            )
        }

        
    }
}
