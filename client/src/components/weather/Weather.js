import React, { useState } from "react";
const { getWeather } = require("../../services/weatherApiService");

function Weather() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();

  const fetchWeatherData = async () => {
    const weather = await getWeather(cityName);
    setWeatherData(weather);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Insert name of City, Country, Coordinates..."
        />
        <button type="submit" disabled={!cityName}>
          Get Weather
        </button>
      </form>
      {weatherData && (
        <>
          <div>
            {weatherData.location.name + ", " + weatherData.location.country}
          </div>
          <div>Temperature: {Math.round(weatherData.current.temp_c)}°C</div>
          <div>
            Probability of precipitation:{" "}
            {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
