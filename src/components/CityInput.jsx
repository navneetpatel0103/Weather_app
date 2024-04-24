import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react';

export default function CityInput({ updateWeatherData }) {
    //generate and use your Api key from openWeatherMap -> Profile -> My Api Keys
    const API_key = "";
    const [cityName, setcityName] = useState("Delhi");
    const [timerId, setTimerId] = useState();
    const [dropdownCities, setdropdownCities] = useState([]);
    const getWeatherData = async (city_name) => {
        try {
            console.log(API_key);
            const weatheUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
            const response = await fetch(weatheUrl);
            const data = await response.json();
            updateWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const cityUrl = `https://countriesnow.space/api/v0.1/countries/population/cities`;
                const response = await fetch(cityUrl);
                const cityData = await response.json();
                const cityOptions = cityData.data.map((curr) => ({
                    value: curr.city,
                    label: curr.city+", " + curr.country
                }))
                setdropdownCities(cityOptions);
            } catch (error) {
                console.error("Error fetching city data:", error);
            }
        }
        fetchCities();
        let name = cityName;
        setcityName("");
        getWeatherData(name);
    }, []);

    const getCityName = (selectedOption) => {
        clearTimeout(timerId);
        setcityName(selectedOption);
        const timeOutId = setTimeout(() => getWeatherData(selectedOption.value), 500);
        setTimerId(timeOutId);
    }

    return (
        <div>
            {dropdownCities.length > 0 ? (
                <div className='pt-3 px-5'>
                <Select
                    value={cityName}
                    onChange={getCityName}
                    options={dropdownCities}
                    isClearable
                    isSearchable
                    placeholder="Search your city..."
                />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
