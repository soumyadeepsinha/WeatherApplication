import React from 'react'
import './Weather.module.css'

const Weather = props => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>


        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg; c</h1>
        ) : null}

        {props.humidity ? (
          <h3 className="py-2">Humidity : {props.humidity}</h3>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_max, props.temp_min)}

        {/* Weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather


function maxminTemp(max, min) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{max}&deg; c</span>
        <span className="px-4">{min}&deg; c</span>
      </h3>
    );
  }
}