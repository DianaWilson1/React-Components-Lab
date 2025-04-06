import React from "react";
import { weatherForecastsData } from "./components/WeatherForecast/WeatherData";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

const App = () => {

  return (
    <>
      <h1>Local Weather</h1>
      <WeatherForecast data={weatherForecastsData} />
    </>
  );
};

export default App;
