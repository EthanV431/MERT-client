import React from 'react';
import { Link } from 'react-router-dom';
import './weatherStationGraphs.css';

const WeatherStation = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Dashboard</Link></h1>
      </header>
      <main>
        <h2>ZENTRA Weather Station</h2>
        <ul>
          <li><Link to="/weatherStationWindSpeed">Wind Speed</Link></li>
          <li><Link to="/weatherStationPressure">Pressure</Link></li>
          <li><Link to="/weatherStationLightning">Lightning</Link></li>
          <li><Link to="/weatherStationSolarRadiation">Solar Radiation</Link></li>
          <li><Link to="/weatherStationTemperature">Temperature</Link></li>
          <li><Link to="/weatherStationPercipitation">Percipitation</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default WeatherStation;