import React from "react";
import WeatherCondition from "./WeatherCondition";
import WeatherIcon from "./WeatherIcon";
import WeatherTime from "./WeatherTime";


const Weather = ({ weather }) => {

  return (
    <div className="weather">
      <h2>{weather.day}</h2>
      <WeatherIcon img={weather.img} imgAlt={weather.imgAlt} />
      <WeatherCondition conditions={weather.conditions} />
      <WeatherTime time={weather.time} />
    </div>
  )
}

export default Weather;
