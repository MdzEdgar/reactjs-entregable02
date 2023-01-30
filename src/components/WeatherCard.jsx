import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CityResults from './CityResults'
import "./styles/WeatherCard.css"

const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp, API_KEY, setCoords}) => {
  
  const [nameCity, setNameCity] = useState()
  const [resultsCities, setResultsCities] = useState([])

  const getCoords = (nameCity) => {
    const end_point = `https://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&limit=5&appid=${API_KEY}`
    axios.get(end_point)
      .then((response) => setResultsCities(response.data))
      .catch((err) => console.log(err))
  }

  useEffect (() => {
    if(nameCity){
      getCoords(nameCity)
    }
  }, [nameCity])

  return (
    <section className='weatherCard'>
      <h1 className='weatherCard__title'>Weather App</h1>
      
      <h2 className='weatherCard__place'>{weather?.name}, {weather?.sys.country} </h2>
      <div className='weatherCard__img'>
        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
      </div>
      <h3 className='weatherCard__temp'>{
        isCelsius ? temps?.celsius + String.fromCharCode(176) + "C": temps?.fahrenheit + String.fromCharCode(176) + "F"
        }
      </h3>
      
      <ul className='weatherCard__list'>
        <li className='weatherCard__description'>
          {weather?.weather[0].main} , {weather?.weather[0].description}
          </li>
        <li>
          <span>Wind Speed: {weather?.wind.speed} m/sec</span>
        </li>
        <li>
          <span>Clouds: {weather?.clouds.all} %</span>
        </li>
        <li>
          <span>Preassure: {weather?.main.pressure} hPa</span>
        </li>
      </ul>
      <button className='weatherCard__btn' onClick={changeUnitTemp}>&deg;C/ &deg;F</button>
      <div className='search-locations'>
        {<CityResults resultsCities={resultsCities} setCoords={setCoords} setNameCity={setNameCity}  /> }
      </div>
    </section>
  )
}

export default WeatherCard