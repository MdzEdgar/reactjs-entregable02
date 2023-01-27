import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

const API_KEY = "a8b73ddc7f2942c5c6b1538dda0ff8f7"

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const success = (e) => {
    console.log(e)
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude
    }

    setCoords(newCoords)
  }

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
    axios.get(URL)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
    }
  }, [coords])
  
  return (
    <div className="App">
      <WeatherCard weather={weather}/>
    </div>
  )
}

export default App
