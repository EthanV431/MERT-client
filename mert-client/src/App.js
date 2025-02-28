import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WeatherStation from './Pages/WeatherStation/weatherStation';
import WeatherStationWindSpeed from './Pages/WeatherStation/WeatherStationGraphs/weatherStationWindSpeed';
import WeatherStationPressure from './Pages/WeatherStation/WeatherStationGraphs/weatherStationPressure';
import WeatherStationLightning from './Pages/WeatherStation/WeatherStationGraphs/weatherStationLightning';
import WeatherStationSolarRadiation from './Pages/WeatherStation/WeatherStationGraphs/weatherStationSolarRadiation';
import WeatherStationTemperature from './Pages/WeatherStation/WeatherStationGraphs/weatherStationTemperature';
import WeatherStationPercipitation from './Pages/WeatherStation/WeatherStationGraphs/weatherStationPercipitation';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/MERT-client" element={<Home />} />
        <Route path="/weatherStation" element={<WeatherStation />} />
        <Route path="/weatherStationWindSpeed" element={<WeatherStationWindSpeed />} />
        <Route path="/weatherStationPressure" element={<WeatherStationPressure />} />
        <Route path="/weatherStationLightning" element={<WeatherStationLightning />} />
        <Route path="/weatherStationSolarRadiation" element={<WeatherStationSolarRadiation />} />
        <Route path="/weatherStationTemperature" element={<WeatherStationTemperature />} />
        <Route path="/weatherStationPercipitation" element={<WeatherStationPercipitation />} />
      </Routes>
    </Router>
  );
}

export default App;