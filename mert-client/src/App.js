import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weatherStation" component={WeatherStation} />
        <Route path="/weatherStationWindSpeed" component={WeatherStationWindSpeed} />
        <Route path="/weatherStationPressure" component={WeatherStationPressure} />
        <Route path="/weatherStationLightning" component={WeatherStationLightning} />
        <Route path="/weatherStationSolarRadiation" component={WeatherStationSolarRadiation} />
        <Route path="/weatherStationTemperature" component={WeatherStationTemperature} />
        <Route path="/weatherStationPercipitation" component={WeatherStationPercipitation} />
      </Switch>
    </Router>
  );
}

export default App;