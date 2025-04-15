import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WeatherStation from "./Pages/WeatherStation/weatherStation";

function App() {
  return (
    <Router basename="/mert">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/weatherStation" element={<WeatherStation />} />
      </Routes>
    </Router>
  );
}

export default App;
