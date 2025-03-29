import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationPercipitation = () => {
  const percipitationData = useMemo(() => [
    { name: '00:00', value: 0 },
    { name: '01:00', value: 1 },
    { name: '02:00', value: 0.5 },
    { name: '03:00', value: 2 },
    { name: '04:00', value: 1.5 },
    { name: '05:00', value: 3 },
    { name: '06:00', value: 2.5 },
    { name: '07:00', value: 4 },
    { name: '08:00', value: 3.5 },
    { name: '09:00', value: 5 }
  ], []);

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setChartData(percipitationData);
    };

    fetchData();
  }, [percipitationData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Percipitation</h2>
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
            <h3>Percipitation Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No percipitation data available.</p>
        )}
      </main>
    </div>
  );
};

export default WeatherStationPercipitation;