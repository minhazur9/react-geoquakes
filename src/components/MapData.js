import React from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import EarthquakePNG from '../images/earthquake.png';

const mapStyles = {
    width: '37%',
    height: '225%',
    right: '65px'
    
    
  };

export class MapContainer extends React.Component {  
    state = {
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}          
      };

      

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    render() { 
      console.log(this.earthquakeList)
      return (
        <Map
          google={this.props.google}
          zoom={4}
          style={mapStyles}
          initialCenter={
            {
              lat: 39.362129,
              lng: -74.415108
            }
          }
        >
        {this.props.earthquakeData.map((data) => {
          return (
          <Marker 
          key={data.time}
          position={{lng: data.geometry.coordinates[0], lat: data.geometry.coordinates[1]}}
          onClick={this.onMarkerClick}
          icon={{url:EarthquakePNG, scaledSize:  new this.props.google.maps.Size(25,25)}}
          
          name={data.properties.title.replace(/.*?of\s|.*?-\s/,"")}
          />
          )
        })}
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      );
      
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
  })(MapContainer)