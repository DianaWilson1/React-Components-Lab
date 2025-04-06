import React from "react";
import Weather from "./Weather";

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
