import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

export default function CityInput({updateWeatherData}) {
    const API_key = "dc53c06ff82d739c3e0b27d25096461a";
    const [cityName, setcityName] = useState("Delhi");
    const [timerId, setTimerId] = useState();
    const getWeatherData = async (city_name) => {
        try {
            console.log("city", city_name);
            console.log(API_key);
            const weatheUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
            const response = await fetch(weatheUrl);
            const data = await response.json();
            console.log(data);
            updateWeatherData(data);
        }catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

useEffect(() => {
    let name=cityName;
    setcityName("");
    getWeatherData(name);
}, []);

const getCityName=(e)=>{
    clearTimeout(timerId);
    setcityName(e.target.value);
    const timeOutId=setTimeout(()=>getWeatherData(e.target.value),500);
    setTimerId(timeOutId);
  }

    return (
        <div>
            <div className="my-4 flex items-center justify-center">
                <div className="relative w-full max-w-xs" >
                    <input className='bg-black text-white pl-12 pr-3 h-7 w-full rounded-md py-4' placeholder='Search your city...' type="text" onChange={getCityName} value={cityName}/>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center justify-center ">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}
