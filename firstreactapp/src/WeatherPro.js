import React, {useState} from 'react'
import './weather.css'

function Exweather(){
    const apiKey = '1e23f03f51689a06f2ee1e51ff337e9f'
    const [weatherData, setweather] = useState([])
    const [city, setcity] = useState("")

    const getWeather = (event) =>{
        if(event.key === "Enter"){
            event.preventDefault()
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
            then(response =>response.json()).then(data=>setweather(data))
        }
    }
    return(
    
        <div className='container-fluid text-center'>
            <div className='my-2 w-75 form1 m-auto'>
                <input className='px-2 py-1 my-2 w-75 input' type="text" placeholder="Enter City..."
                onChange={e => setcity(e.target.value)} 
                value={city} 
                onKeyPress={getWeather}></input>
                
            
            
            { typeof weatherData.main === "undefined" ? (
                <div>
                    <p className='fw-bold'><span className='fs-3 text-danger'>W</span>elcome to weather app! Enter in a city to get the weather of.</p>
                </div>
            ) : (
                <div className='results my-2 py-2'>
                    <p className='city py-1'>{weatherData.name}</p>
                    <p className='temp py-1'>{Math.round(weatherData.main.temp)}°F</p>
                    <p className='weather py-1'>{weatherData.weather[0].main}</p>
                </div>
            )
            } 
            </div>
        </div>
    )

            }
export default Exweather