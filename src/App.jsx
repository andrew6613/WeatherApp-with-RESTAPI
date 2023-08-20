import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import SearchLocation from "./components/Search/SearchLocation";
import { API_key } from "./api";
import { useState } from "react";
import Daily from "./components/Daily/Daily";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [weatherForecast, setweatherForecast] = useState(null);

  const getLongLat = (searhValue) => {
    const [lon, lat] = searhValue.coordinates.split(" ");
    const getCurrentWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru`
    );
    const getForecast = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru`
    );

    Promise.all([getCurrentWeather, getForecast]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeatherData({ city: searhValue.label, ...weatherResponse });
      setweatherForecast({ city: searhValue.label, ...forecastResponse });
    });
  };

  // console.log(currentWeatherData, weatherForecast);
  return (
    <div className="App">
      <SearchLocation getCoordinates={getLongLat} />
      <CurrentWeather data={currentWeatherData} />
      {weatherForecast && <Daily data={weatherForecast} />}
    </div>
  );
}

export default App;
