import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', padding: '6px', border: '1px solid #ccc' }}>
        <p>{`Time: ${label}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const sensorUnits = {
  "Max Air Temperature": "°C",
  "Min Air Temperature": "°C",
  "Air Temperature": "°C",
  "Wind Speed": "m/s",
  "Wind Direction": "°",
  // add more sensor-to-unit mappings as needed
};

const WeatherStationGraph = ({ data, selectedSensor }) => {
  const unit = sensorUnits[selectedSensor] || "value";
  const processedData = data.map(d => ({
    ...d,
    name: new Date(d.timestamp).toLocaleString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={processedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name={`${selectedSensor} (${unit})`}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherStationGraph;
