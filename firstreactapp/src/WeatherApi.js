import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Weather = ()=>{
    const [search, setsearch] = useState("")
    const [weather,setweather] = useState([])
    

    useEffect(
        ()=>callUnplashApi(search),[]
    )
    const callUnplashApi = (search)=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=1e23f03f51689a06f2ee1e51ff337e9f`
        axios.get(url).then((response)=>console.log(response.data)).catch((err)=>console.log(err))
    }
    /* const handlesubmit = (event)=>{
        event.preventDefault()
        callUnplashApi(search)
    } */
    const handlechange = (event)=>{
        console.log(event.target.value)
    }
    return(
        
        <div>
            <form>
                <input type="text" placeholder="searchText" onChange={handlechange}></input>
                <input type="submit" value="submit"></input>
            </form>
            
            
                 {weather.map((res)=>console.log(res.description))} 
                
        </div>
    )
}
export default Weather