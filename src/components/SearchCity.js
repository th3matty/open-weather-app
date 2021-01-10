import React, { useState } from "react";
import "./SearchCity.css";
const SearchCity = ({ onSearch }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="container">
        <div>
          <div>
            <h1>Search your city</h1>
            <hr></hr>
          </div>
        </div>

        <div>
          <div>
            <input
              className="input"
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </div>
        </div>

        <div>
          <div>
            <button className="searchButton" onClick={() => onSearch(city)}>
              Check Weather
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCity;
