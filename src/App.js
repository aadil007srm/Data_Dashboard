import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import LandingPage from './LandingPage';

function App() {
  const [city, setCity] = useState("Berlin");
  const [weatherData, setWeatherData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchCoordinates = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      fetchWeatherData(lat, lon);
    } else {
      alert("City not found. Please enter a valid city name.");
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );
    const data = await response.json();
    setWeatherData(data.hourly);
    prepareChartData(data.hourly);
  };

  const prepareChartData = (data) => {
    setChartData({
      labels: data.time.slice(0, 24),
      datasets: [
        {
          label: 'Temperature (°C)',
          data: data.temperature_2m.slice(0, 24),
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
          animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
          },
        },
        {
          label: 'Humidity (%)',
          data: data.relative_humidity_2m.slice(0, 24),
          fill: true,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          tension: 0.1,
          animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
          },
        },
        {
          label: 'Wind Speed (m/s)',
          data: data.wind_speed_10m.slice(0, 24),
          fill: true,
          backgroundColor: 'rgba(54,162,235,0.2)',
          borderColor: 'rgba(54,162,235,1)',
          tension: 0.1,
          animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
          },
        },
      ],
    });
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <div>
              <h1>Weather Dashboard</h1>
              <div>
                <label>
                  City:
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
                <button onClick={fetchCoordinates}>Get Weather Data</button>
              </div>
              {chartData && (
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: `Weather Forecast for ${city} (Next 24 Hours)`,
                      },
                    },
                    animation: {
                      onComplete: () => {
                        console.log('Animation complete!');
                      },
                    },
                  }}
                />
              )}
            </div>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
