import React from 'react';
import { Link } from 'react-router-dom';
import './weatherStationGraphs.css';

const WeatherStation = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>ZENTRA Weather Station</h2>
        <ul>
          <li><Link to="/weatherStationWindSpeed"><button>Wind Speed</button></Link></li>
          <li><Link to="/weatherStationPressure"><button>Pressure</button></Link></li>
          <li><Link to="/weatherStationLightning"><button>Lightning</button></Link></li>
          <li><Link to="/weatherStationSolarRadiation"><button>Solar Radiation</button></Link></li>
          <li><Link to="/weatherStationTemperature"><button>Temperature</button></Link></li>
          <li><Link to="/weatherStationPercipitation"><button>Percipitation</button></Link></li>
        </ul>
      </main>
    </div>
  );
};

export default WeatherStation;