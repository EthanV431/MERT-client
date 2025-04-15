import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationTemperature = () => {
  const temperatureData = useMemo(() => [
    { name: '00:00', value: 15 },
    { name: '01:00', value: 14 },
    { name: '02:00', value: 13 },
    { name: '03:00', value: 12 },
    { name: '04:00', value: 11 },
    { name: '05:00', value: 10 },
    { name: '06:00', value: 9 },
    { name: '07:00', value: 8 },
    { name: '08:00', value: 7 },
    { name: '09:00', value: 6 }
  ], []);

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setChartData(temperatureData);
    };

    fetchData();
  }, [temperatureData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Temperature</h2>
          <ul>
            <li><Link to="/weatherStationWindSpeed"><button>Wind Speed</button></Link></li>
            <li><Link to="/weatherStationPressure"><button>Pressure</button></Link></li>
            <li><Link to="/weatherStationLightning"><button>Lightning</button></Link></li>
            <li><Link to="/weatherStationSolarRadiation"><button>Solar Radiation</button></Link></li>
            <li><Link to="/weatherStationPercipitation"><button>Percipitation</button></Link></li>
          </ul>
        { chartData.length > 0 ? (
          <div>
            <h3>Temperature Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No temperature data available.</p>
        )}
      </main>
    </div>
  );
};

export default WeatherStationTemperature;