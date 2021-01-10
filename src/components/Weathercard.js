import React from "react";
//import "./Weathercard.css";

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather pic" />
      </div>
      <div>
        <p style={{fontSize : 25}}> {main} </p>
        <p>
          {" "}
          {date.toLocaleDateString("de-DE")} -{" "}
          {date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
        </p>
        <p>
          Min: <span style={{ paddingLeft: "2px" }}> {temp_min} °C</span>
        </p>
        <p>
          Max: <span style={{ paddingLeft: "2px" }}> {temp_max} °C</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
// Weathercard.defaultProps = {
//     dt: 1610204400,
//     temp_min: "0",
//     temp_max: "1",
//     main: "Clear",
//     icon: "01d",
//   };
