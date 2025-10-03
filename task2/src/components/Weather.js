import React, { useState } from 'react';
import './Weather.css'; // Import the CSS

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    const apiKey = '3762346d3e204023a1c94016253006';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      if (data.error) {
        setWeather(null);
        setError(data.error.message);
      } else {
        setWeather(data);
        setError('');
      }
    } catch (err) {
      setError('Failed to fetch weather data.');
      setWeather(null);
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather Update</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-result">
          <h3>
            {weather.location.name}, {weather.location.region}
          </h3>
          <h3><p className="country-name">{weather.location.country}</p></h3>
          <p>
            <strong>Temperature:</strong> {weather.current.temp_c}°C
          </p>
          <p>
            <strong>Condition:</strong> {weather.current.condition.text}
          </p>
          <img src={weather.current.condition.icon} alt="Weather icon" />
        </div>
      )}
    </div>
  );
};

export default Weather;
