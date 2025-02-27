import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WeatherStation from './Pages/WeatherStation/weatherStation';
import WeatherStationWindSpeed from './Pages/WeatherStation/WeatherStationGraphs/weatherStationWindSpeed';
// Import other category pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weatherStation" element={<WeatherStation />} />
        <Route path="/weatherStation/windSpeed" element={<WeatherStationWindSpeed />} />
        {/* Add routes for other categories */}
      </Routes>
    </Router>
  );
}

export default App;