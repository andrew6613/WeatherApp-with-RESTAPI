import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "../Search/SearchLocation.css";
import { options, URL_GEO_CITIES } from "../../api";

const SearchLocation = ({ getCoordinates }) => {
  const [cityName, setCityName] = useState(null);

  const handleCity = (searhValue) => {
    setCityName(searhValue);
    getCoordinates(searhValue);
  };

  const loadOptions = (inputValue) => {
    try {
      return fetch(
        `${URL_GEO_CITIES}&minPopulation=500000&namePrefix=${inputValue}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                coordinates: `${city.longitude} ${city.latitude}`,
                label: `${city.name} ${city.countryCode}`,
              };
            }),
          };
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Type name of the city"
        onChange={handleCity}
        value={cityName}
        debounceTimeout={900}
        loadOptions={loadOptions}
        defaultAdditional="Moscow"
      />
    </div>
  );
};

export default SearchLocation;
