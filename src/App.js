import React from 'react';
import axios from 'axios';

import EarthquakeData from './components/EarthquakeData';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      earthquakeData: [],
      mapData: [],
    }
  }

  componentDidMount() {
    axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
    .then((response) => this.setState({earthquakeData: response.data.features}))
    .catch((error) => console.log(error))

  }
  render() {
    return (
    <div className="app">
      <div className="mapContainer">
        ...put Map Component here...
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <EarthquakeData earthquakeData={this.state.earthquakeData}/>
      </div>
    </div>
  );
  }
  
}

export default App;
