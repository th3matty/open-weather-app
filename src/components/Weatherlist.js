import React from "react";
import WeatherCard from "./Weathercard";
import "./WeatherList.css";

const WeatherList = ({ weathers }) => {
  // filter the weather-data from 9am to 9pm
  const getWeather = Object.entries(weathers).filter((elem, index) => {
    const dateFormated = elem[1].dt_txt.slice(11, 13);
    if (dateFormated < 20 && dateFormated > 8) {
      return elem;
    }
  });
  return (
    <div className="weatherList">
      {getWeather.map((elem, index) => (
        <div key={index} className="cardWrapper">
          <WeatherCard
            temp_max={elem[1].main.temp_max}
            temp_min={elem[1].main.temp_min}
            dt={elem[1].dt * 1000}
            main={elem[1].weather[0].main}
            icon={elem[1].weather[0].icon}
          />
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
