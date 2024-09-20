import React from 'react';
import './LandingPage.css'; // Import the CSS for styling
import NewsTicker from './NewsTicker'; // Import the NewsTicker component

function LandingPage({ weatherData }) {
  const newsItems = [
    "Did you know? The highest temperature ever recorded was 56.7°C in Furnace Creek, California!",
    "Weather Update: Expect showers in the afternoon with a high of 22°C.",
    "Interesting Fact: The coldest temperature ever recorded was -89.2°C in Antarctica.",
    "Stay tuned for more weather updates!"
  ];

  return (
    <div className="landing-page">
      {/* Add the NewsTicker component here */}
      <NewsTicker news={newsItems} />

      <nav className="navbar">
        <h1>Weather App</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>

      <header className="header">
        <h2>Welcome to the Weather Dashboard</h2>
        <p>Your one-stop solution for weather updates!</p>
      </header>

      <div className="cards-container">
        <div className="card">
          <h3>Temperature</h3>
          <p>Get the latest temperature updates for your city.</p>
        </div>
        <div className="card">
          <h3>Humidity</h3>
          <p>Check the humidity levels to plan your day.</p>
        </div>
        <div className="card">
          <h3>Wind Speed</h3>
          <p>Stay informed about the wind speed to avoid surprises!</p>
        </div>
        <div className="card">
          <h3>Precipitation</h3>
          <p>Find out if rain is in the forecast.</p>
        </div>
        <div className="card">
          <h3>UV Index</h3>
          <p>Check the UV index to protect your skin.</p>
        </div>
        <div className="card">
          <h3>Cloud Coverage</h3>
          <p>Know the cloud coverage to plan your outdoor activities.</p>
        </div>
        <div className="card">
          <h3>Air Quality</h3>
          <p>Stay informed about air quality levels in your area.</p>
        </div>
        <div className="card">
          <h3>Sunrise & Sunset</h3>
          <p>Get the times for sunrise and sunset in your location.</p>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Weather App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;   