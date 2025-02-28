import React from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';

const WeatherStationWindSpeed = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="MERT-client">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Wind</h2>
          <ul>
            <li><Link to="/weatherStationWindSpeed">Wind Speed</Link></li>
            <li><Link to="/weatherStationPressure">Pressure</Link></li>
            <li><Link to="/weatherStationLightning">Lightning</Link></li>
            <li><Link to="/weatherStationSolarRadiation">Solar Radiation</Link></li>
            <li><Link to="/weatherStationTemperature">Temperature</Link></li>
            <li><Link to="/weatherStationPercipitation">Percipitation</Link></li>
          </ul>
        {/* Add your graphs here */}
      </main>
    </div>
  );
};

export default WeatherStationWindSpeed;