import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <section>
      <h2>{weather?.name}, {weather?.sys.country} </h2>
      <ul>
        <li>
          {weather?.weather[0].main} , {weather?.weather[0].description}
          </li>
        <li>
          <span>Wind Speed: {weather?.wind.speed} m/sec</span>
        </li>
        <li>
          <span>Clouds: {weather?.clouds.all} %</span>
        </li>
        <li>
          <span>Preassure: {weather?.main.preassure} hPa</span>
        </li>
      </ul>
    </section>
  )
}

export default WeatherCard