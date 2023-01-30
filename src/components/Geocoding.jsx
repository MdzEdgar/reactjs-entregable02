import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Geocoding = ({API_KEY}) => {

  const [nameCity, setNameCity] = useState()

  /*const [search, setSearch] = useState("")*/

  // const getCoords = async() => {
  //   console.log(nameCity)
  //   const end_point = `http://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&limit=5&appid=a8b73ddc7f2942c5c6b1538dda0ff8f7`
  //   axios.get(end_point)
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err))
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameCity(e.target.nameCity.value)
    console.log("handleSubmit", e.target.nameCity.value)
  }

  const getCoords = async(nameCity) => {
    console.log("getCoords", nameCity)
    const end_point = `http://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&limit=5&appid=${API_KEY}`
    axios.get(end_point)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
  }

  useEffect (() => {
    if(nameCity){
      getCoords(nameCity)
    }
  }, [nameCity])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameCity"></label>
        <input id="nameCity" type="text" />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Geocoding