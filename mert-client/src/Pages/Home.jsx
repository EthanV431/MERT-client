import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sensor Dashboard</h1>
      </header>
      <main>
        <h2>Sensors</h2>
        <ul>
          <li><Link to="/weatherStation">Weather Station</Link></li>
          {/* Add more sensors as needed */}
        </ul>
      </main>
    </div>
  );
};

export default Home;