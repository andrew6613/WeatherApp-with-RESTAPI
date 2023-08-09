import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import SearchLocation from "./components/Search/SearchLocation";
import { API_key } from "./api";

function App() {
  const getLongLat = (searhValue) => {
    const [lon, lat] = searhValue.coordinates.split(" ");
    getCurrentWeather(lon, lat);
    console.log(searhValue);
  };

  const getCurrentWeather = (lon, lat) => {
    const URL_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

    try {
      return fetch(URL_CURRENT_WEATHER)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <SearchLocation getCoordinates={getLongLat} />
      <CurrentWeather />
    </div>
  );
}

export default App;
