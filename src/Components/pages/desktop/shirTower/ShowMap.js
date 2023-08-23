import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { ConstantsNames as pathUrl } from "../../../../Components/Urls"

/* https://github.com/google-map-react/google-map-react */

const AnyReactComponent = ({ text,logo }) => 
    
    <div>
        <div style={{   background: 'rgba(255, 255, 255, 0.6)',
                        padding: '0px 0 0 0',
                        textAlign: 'center',
                        boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.75)',
                        borderRadius: '10px',
                        width: '170px',
                        height: '80px',
                        fontSize: '50px' }}>
            
            <img src={logo} alt={text} style={{width: '150px'}} />
        </div>
    </div>;

class ShowMap extends Component {

  static defaultProps = {

    
    
    zoom: 16
  };

  render() {

    //console.log(this.props);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.props.height, width: this.props.width }}>
        <GoogleMapReact
           
          bootstrapURLKeys={{
              key: 'AIzaSyBumhZ7Pcov0sKbqyMoO7umU5bDU9ycXZc',
              language: 'he',
            }}

          defaultCenter={{lat: this.props.lat, lng: this.props.long}}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent className="mapShow" 
            lat={this.props.lat}
            lng={this.props.long}
            logo={pathUrl.pic + this.props.data.logo}
            text={this.props.data.name}
          />
        
        </GoogleMapReact>
      </div>
    );
  }
}

export default ShowMap;