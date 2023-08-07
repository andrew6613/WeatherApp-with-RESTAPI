import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const SearchLocation = () => {
  const [cityName, setCityName] = useState(null);

  const handleCity = (inputValue) => {
    setCityName(inputValue);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Type name of the city"
        onChange={handleCity}
        value={cityName}
        debounceTimeout={600}
      />
    </div>
  );
};

export default SearchLocation;
