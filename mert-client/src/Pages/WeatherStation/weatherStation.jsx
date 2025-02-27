import React from 'react';
import { Link } from 'react-router-dom';

const WeatherStation = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Dashboard</Link></h1>
      </header>
      <main>
        <h2>Sensor 1</h2>
        <ul>
          <li><Link to="/weatherStationWindSpeed">Wind Speed</Link></li>
          <li><Link to="/sensor1/category2">Category 2</Link></li>
          <li><Link to="/sensor1/category3">Category 3</Link></li>
          <li><Link to="/sensor1/category4">Category 4</Link></li>
          <li><Link to="/sensor1/category5">Category 5</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default WeatherStation;