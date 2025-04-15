import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStation = () => {
  const [chartData, setChartData] = useState([]);
  const [fromDateTime, setFromDateTime] = useState("2025-02-18T00:00");
  const [untilDateTime, setUntilDateTime] = useState("2025-02-18T23:59");
  const [selectedSensor, setSelectedSensor] = useState("Wind Direction");

  const sensorOptions = [
    "Max Air Temperature",
    "Min Air Temperature",
    "Air Temperature",
    "Drop Counts",
    "Max Precip Rate",
    "Precipitation",
    "RH Sensor Temp",
    "Lightning Activity",
    "Lightning Distance",
    "Vapor Prssure",
    "Atmospheric Pressure",
    "Wind Speed",
    "Wind Direction",
    "Gust Speed",
    "Solar Radiation",
    "Tilt Angle",
    "Spoon Tips",
    "VPD"
  ];

  useEffect(() => {
    const fromZ = new Date(fromDateTime).toISOString();
    const untilZ = new Date(untilDateTime).toISOString();

    fetch(`https://alextitov.com/mert/api/data/${fromZ}/${untilZ}`)
      .then(res => res.text())
      .then(rawText => {
        try {
          const allData = JSON.parse(rawText);
          const filtered = allData.filter(d => d.sensor_type === selectedSensor);
          setChartData(filtered);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch(err => console.error(err));
  }, [fromDateTime, untilDateTime, selectedSensor]);

  const handleDownload = () => {
    const fileData = JSON.stringify(chartData, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${selectedSensor.replace(/\s/g, '')}Data.json`;
    link.href = url;
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - All Sensors</h2>
        <label>Select Sensor:</label>
        <select
          value={selectedSensor}
          onChange={e => setSelectedSensor(e.target.value)}
        >
          {sensorOptions.map(sensor => (
            <option key={sensor} value={sensor}>
              {sensor}
            </option>
          ))}
        </select>
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
            <h3>{selectedSensor} Over Time</h3>
            <WeatherStationGraph
              data={chartData}
              selectedSensor={selectedSensor}
            />
          </div>
        ) : (
          <p>No data available for {selectedSensor}.</p>
        )}
        <button onClick={handleDownload}>Download {selectedSensor} Data</button>
      </main>
    </div>
  );
};

export default WeatherStation;