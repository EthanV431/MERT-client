import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../weatherStationGraphs.css';
import WeatherStationGraph from './weatherStationGraph';

const WeatherStationLightning = () => {
  /*const lightningData = useMemo(() => [
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
  ], [])*/

  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch('/mert/api/data?from=2024-04-01T00:00:00Z&until=2025-04-08T23:59:59Z')
      .then(res => res.text()) // Use .text() to see raw response
      .then(rawText => {
        console.log("Raw response:", rawText);
        try {
          const data = JSON.parse(rawText);
          console.log("Parsed JSON:", data);
          setChartData(data);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleDownload = () => {
    const fileData = JSON.stringify(chartData, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'chartData.json';
    link.href = url;
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">Sensor Home</Link></h1>
      </header>
      <main>
        <h2>Weather Station - Lightning</h2>
          <ul>
          <li><Link to="/weatherStationWindSpeed"><button>Wind Speed</button></Link></li>
          <li><Link to="/weatherStationPressure"><button>Pressure</button></Link></li>
          <li><Link to="/weatherStationSolarRadiation"><button>Solar Radiation</button></Link></li>
          <li><Link to="/weatherStationTemperature"><button>Temperature</button></Link></li>
          <li><Link to="/weatherStationPercipitation"><button>Percipitation</button></Link></li>
          </ul>
        { chartData.length > 0 ? (
          <div>
            <h3>Lightning Strikes Over Time</h3>
            <WeatherStationGraph data={chartData} />
          </div>
        ) : (
          <p>No lightning data available.</p>
        )}

        <button onClick={handleDownload}>Download Lightning Data</button>
      </main>
    </div>
  );
};

export default WeatherStationLightning;