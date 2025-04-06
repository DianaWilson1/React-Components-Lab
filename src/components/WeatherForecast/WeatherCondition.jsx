import React from "react";

const WeatherCondition = ({ conditions }) => {
  return (
    <p>
      <span>condition: </span>{conditions}
    </p>
  )
}

export default WeatherCondition;
