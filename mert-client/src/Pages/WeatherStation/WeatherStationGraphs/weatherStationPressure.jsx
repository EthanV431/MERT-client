import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationPressure = () => {
  const pressureData = useMemo(() => [
    { name: '00:00', value: 1010 },
    { name: '01:00', value: 1012 },
    { name: '02:00', value: 1011 },
    { name: '03:00', value: 1013 },
    { name: '04:00', value: 1010 },
    { name: '05:00', value: 1014 },
    { name: '06:00', value: 1012 },
    { name: '07:00', value: 1015 },
    { name: '08:00', value: 1011 },
    { name: '09:00', value: 1013 }
  ], []);

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setChartData(pressureData);
    };

    fetchData();
  }, [pressureData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Pressure</h2>
          <ul>
            <li><Link to="/weatherStationWindSpeed"><button>Wind Speed</button></Link></li>
            <li><Link to="/weatherStationLightning"><button>Lightning</button></Link></li>
            <li><Link to="/weatherStationSolarRadiation"><button>Solar Radiation</button></Link></li>
            <li><Link to="/weatherStationTemperature"><button>Temperature</button></Link></li>
            <li><Link to="/weatherStationPercipitation"><button>Percipitation</button></Link></li>
          </ul>
        { chartData.length > 0 ? (
          <div>
            <h3>Pressure Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No pressure data available.</p>
        )}
      </main>
    </div>
  );
};

export default WeatherStationPressure;