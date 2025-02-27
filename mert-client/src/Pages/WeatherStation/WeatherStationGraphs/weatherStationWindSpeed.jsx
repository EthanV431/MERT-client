import React from 'react';
import { Link } from 'react-router-dom';

const WeatherStationWindSpeed = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Dashboard</Link></h1>
      </header>
      <main>
        <h2>Sensor 1 - Category 1</h2>
        {/* Add your graphs here */}
      </main>
    </div>
  );
};

export default WeatherStationWindSpeed;