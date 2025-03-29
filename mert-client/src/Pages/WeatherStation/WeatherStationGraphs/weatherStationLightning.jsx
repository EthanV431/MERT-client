import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationLightning = () => {
  const lightningData = useMemo(() => [
    { name: '00:00', value: 0 },
    { name: '01:00', value: 2 },
    { name: '02:00', value: 1 },
    { name: '03:00', value: 3 },
    { name: '04:00', value: 0 },
    { name: '05:00', value: 4 },
    { name: '06:00', value: 2 },
    { name: '07:00', value: 5 },
    { name: '08:00', value: 1 },
    { name: '09:00', value: 3 }
  ], []);

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setChartData(lightningData);
    };

    fetchData();
  }, [lightningData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Lightning</h2>
          <ul>
            <li><Link to="/weatherStationWindSpeed">Wind Speed</Link></li>
            <li><Link to="/weatherStationPressure">Pressure</Link></li>
            <li><Link to="/weatherStationLightning">Lightning</Link></li>
            <li><Link to="/weatherStationSolarRadiation">Solar Radiation</Link></li>
            <li><Link to="/weatherStationTemperature">Temperature</Link></li>
            <li><Link to="/weatherStationPercipitation">Percipitation</Link></li>
          </ul>
        { chartData.length > 0 ? (
          <div>
            <h3>Lightning Strikes Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No lightning data available.</p>
        )}
      </main>
    </div>
  );
};

export default WeatherStationLightning;