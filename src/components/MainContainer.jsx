import React from 'react'
import CityInput from './CityInput';
import AddInfo from './AddInfo';
import { useState } from 'react';

const MainContainer = (props) => {
  const iconURL= "";

  const getCountryName=(code)=>{
    const regionNamesInEnglish = new Intl.DisplayNames([code], { type: 'region' });
    return regionNamesInEnglish.of(code);
  }

  const getCurrentDate=(date)=>{
    let d=new Date(date* 1000);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formatter=new Intl.DateTimeFormat('en-US', options);
    const formattedDate= formatter.format(d);
    return formattedDate;

  }

  return (
    <>
    <div>
      <div className=" text-black flex flex-col justify-center items-center mt-4 py-4 px-4 text-center">
        <div className='my-2'>{props.weatherData.name}, {props.weatherData.sys && getCountryName(props.weatherData.sys.country)}</div>
        <div className='mb-2'>{props.weatherData.dt && getCurrentDate(props.weatherData.dt)}</div>
        <div className="bg-black rounded-lg text-white py-1 mb-3 px-4">{props.weatherData.weather && props.weatherData.weather[0].description}</div>
        <div className='my-3 bg-black rounded-full'>
          <img src={props.weatherData.weather && `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`} alt=""/>
        </div>
        <div className='mb-2'>{props.weatherData.main && (props.weatherData.main.temp - 273.15).toFixed(2)} &deg; C</div>
        <div className='mb-2 sm:flex'>
          <div className="mb-2 sm:mr-5">Min: {props.weatherData.main && (props.weatherData.main.temp_min - 273.15).toFixed(2)} &deg; C</div>
          <div className="f">Max: {props.weatherData.main && (props.weatherData.main.temp_max - 273.15).toFixed(2)} &deg; C</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainContainer;


