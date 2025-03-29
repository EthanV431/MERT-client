import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationSolarRadiation = () => {
  const solarRadiationData = useMemo(() => [
    { name: '00:00', value: 10 },
    { name: '01:00', value: 20 },
    { name: '02:00', value: 15 },
    { name: '03:00', value: 25 },
    { name: '04:00', value: 30 },
    { name: '05:00', value: 35 },
    { name: '06:00', value: 40 },
    { name: '07:00', value: 50 },
    { name: '08:00', value: 45 },
    { name: '09:00', value: 55 }
  ], []);

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setChartData(solarRadiationData);
    };

    fetchData();
  }, [solarRadiationData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Solar Radiation</h2>
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
            <h3>Solar Radiation Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No solar radiation data available.</p>
        )}
      </main>
    </div>
  );
};

export default WeatherStationSolarRadiation;