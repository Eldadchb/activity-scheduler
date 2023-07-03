import axios from "axios";
const API_KEY = process.env.REACT_APP_PRIVATE_KEY;

export async function getWeather(location) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
