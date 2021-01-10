import React from "react";
import "./App.css";
import { API_KEY, API_BASE_URL } from "./apis/config";
import UseFetch from "./hooks/UseFetch";
import SearchCity from "./components/SearchCity";
import WeatherList from "./components/Weatherlist";

const App = () => {
  // destructure the returned values
  const { data, error, isLoading, setUrl } = UseFetch();
  // error handling and loading
  const getContent = () => {
    if (error) return <h2>Error, looks like: {error}❗ </h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  return (
    <div className="App">
      <SearchCity
        // api_base_Url = 'http://api.openweathermap.org/';
        // apiKey = your apikey
        onSearch={(city) =>
          setUrl(
            `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          )
        }
      />
      {/* conditionally render  */}
      <div className="cardCointainer">{getContent()}</div>
    </div>
  );
};

export default App;
