import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f84fcf7fdmsh4401051b2f7c3c1p198930jsn82c269422098",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const SearchLocation = () => {
  const [cityName, setCityName] = useState(null);

  const handleCity = (searhValue) => {
    setCityName(searhValue);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${url}?namePrefix=${inputValue}`, options);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Type name of the city"
        onChange={handleCity}
        value={cityName}
        debounceTimeout={600}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default SearchLocation;
