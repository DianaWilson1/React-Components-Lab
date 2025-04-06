import React from "react";
import Weather from "./Weather";
import './WeatherForecast.css';

const WeatherForecast = ({ data }) => {

  return (
    <section>
      {data.map(weather =>
        <Weather weather={weather} />
      )}
    </section>

  )
}
export default WeatherForecast;
