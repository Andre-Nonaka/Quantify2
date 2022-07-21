import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import React, { Component } from 'react'

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 45.02798683395286, lng: -74.73059739986643},
                {latitude: 45.02804882876224, longitude: -74.73031989580095},
                {latitude: 45.0280818367496, longitude: -74.73000170649983},
                {latitude: 45.027933226632584, longitude: -74.72946999165914},
                {latitude: 45.02782501724855, longitude: -74.72945882770249},
                {latitude: 45.02747784408916, longitude: -74.72919089272825}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked on this location!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={17}
            style={{height: "1000px"}}
            initialCenter={{ lat: 45.02798683395286, lng: -74.73059739986643}}
            fullscreenControl={false}
            streetViewControl={false}
            disableDefaultUI={true}
            mapTypeControl={false}
            navigationControl={false}
            mapTypeId={'google.maps.MapTypeId.ROADMAP'}
            gestureHandling={'greedy'}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAYIBJEHwpj1nVDAeu7tV1UKxQ29e75fEg'
})(MapContainer);