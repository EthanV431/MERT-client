import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationPercipitation = () => {
  const [chartData, setChartData] = useState([]);
  const [fromDateTime, setFromDateTime] = useState("2024-04-01T00:00");
  const [untilDateTime, setUntilDateTime] = useState("2025-04-08T23:59");

  useEffect(() => {
    const fromZ = new Date(fromDateTime).toISOString();
    const untilZ = new Date(untilDateTime).toISOString();

    fetch(`/mert/api/data?from=${fromZ}&until=${untilZ}`)
      .then(res => res.text())
      .then(rawText => {
        try {
          const data = JSON.parse(rawText);
          setChartData(data);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch(err => console.error(err));
  }, [fromDateTime, untilDateTime]);

  const handleDownload = () => {
    const fileData = JSON.stringify(chartData, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'percipitationData.json';
    link.href = url;
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Percipitation</h2>
        <ul>
          <li><Link to="/weatherStationWindSpeed"><button>Wind Speed</button></Link></li>
          <li><Link to="/weatherStationPressure"><button>Pressure</button></Link></li>
          <li><Link to="/weatherStationLightning"><button>Lightning</button></Link></li>
          <li><Link to="/weatherStationSolarRadiation"><button>Solar Radiation</button></Link></li>
          <li><Link to="/weatherStationTemperature"><button>Temperature</button></Link></li>
        </ul>
        <div>
          <label>From:</label>
          <input
            type="datetime-local"
            value={fromDateTime}
            onChange={e => setFromDateTime(e.target.value)}
          />
          <label>Until:</label>
          <input
            type="datetime-local"
            value={untilDateTime}
            onChange={e => setUntilDateTime(e.target.value)}
          />
        </div>
        { chartData.length > 0 ? (
          <div>
            <h3>Percipitation Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No percipitation data available.</p>
        )}
        <button onClick={handleDownload}>Download Percipitation Data</button>
      </main>
    </div>
  );
};

export default WeatherStationPercipitation;