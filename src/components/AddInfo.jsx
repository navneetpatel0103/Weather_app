import React from 'react'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import HeatPumpIcon from '@mui/icons-material/HeatPump';

export default function AddInfo(props) {
  return (
    <div className='sm:grid space-x-3 grid-cols-2 grid-rows-2 px-2'>
      <div className='hidden'></div>
      <div className='hidden'></div>
      <div className="flex my-3 bg-slate-200 rounded-md p-2 sm:col-span-1 items-center justify-center space-x-2 shadow-xl sm:justify-start sm:space-x-4" >
        <DeviceThermostatIcon />
        <div className='flex flex-col items-center justify-center'>
          <div className='sm:grid-col-1'>Feels Like</div>
          <div className='sm:rid-col-1'>{props.weatherData.main && (props.weatherData.main.feels_like-273.5).toFixed(2)} &deg; C</div>
        </div>
      </div>
      <div className="flex my-3 bg-slate-200 rounded-md p-2 sm:col-span-1 items-center justify-center space-x-2 shadow-xl sm:justify-start sm:space-x-4">
        <WaterDropIcon />
        <div className='flex flex-col items-center justify-center sm:grid sm:grid-row-2'>
          <div className='grid-col-1'>Humidity</div>
          <div className='grid-col-1'>{props.weatherData.main && props.weatherData.main.humidity}%</div>
        </div>
      </div>
      <div className="flex my-3 bg-slate-200 rounded-md p-2 sm:col-span-1 items-center justify-center space-x-2 shadow-xl sm:justify-start sm:space-x-4">
        <AirIcon />
        <div className='flex flex-col items-center justify-center sm:grid sm:grid-row-2'>
          <div className='grid-col-1'>Wind</div>
          <div className='grid-col-1'>{props.weatherData.wind && props.weatherData.wind.speed} m/s</div>
        </div>
      </div>
      <div className="flex my-3 bg-slate-200 rounded-md p-2 sm:col-span-1 items-center justify-center space-x-2 shadow-xl sm:justify-start sm:space-x-4">
        <HeatPumpIcon />
        <div className='flex flex-col items-center justify-center sm:grid sm:grid-row-2'>
          <div className='grid-col-1'>Pressure</div>
          <div className='grid-col-1'>{props.weatherData.main && props.weatherData.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  )
}
