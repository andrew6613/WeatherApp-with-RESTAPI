import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import SearchLocation from "./components/Search/SearchLocation";

function App() {
  return (
    <div className="App">
      <SearchLocation />
      <CurrentWeather />
    </div>
  );
}

export default App;
