import React, { useEffect, useState } from 'react'
import './styles/CityResults.css'

const CityResults = ({resultsCities, setCoords, setNameCity}) => {

  const [isHidden, setIsHidden] = useState(true)

  const locations = []

  resultsCities.forEach((place) => {
   locations.push(<><article 
      onClick={() => {
        setCoords({lat: place.lat, lon:place.lon});
        setIsHidden(true)
        }}>
    <p>{place.name}, {place.state}, {place.country}</p>
    </article></>)});

const handleSubmit = (e) => {
  e.preventDefault();
  setNameCity(e.target.nameCity.value)
}

  return (
    <><form onSubmit={handleSubmit}>
          <label htmlFor="nameCity"></label>
          <input id="nameCity" type="text" />
          <button onClick={() => setIsHidden(false)}>Search</button>
        </form>
    <div className={`search__results ${isHidden ? "hide--results" : "show--results"} `}>
      { locations }
    </div></>
  )
}

export default CityResults