import MainContainer from './components/MainContainer';
import CityInput from './components/CityInput';
import AddInfo from './components/AddInfo';
import { useState } from 'react';
import sun from '../src/assets/images/sun.jpg'

function App() {
  const [weatherData, setweatherData] = useState({});
  
  const updateWeatherData=(data)=>{
    setweatherData(data);
    console.log("app", data);
  }

  return (
    <>
    <div className=" bg-center bg-no-repeat bg-cover bg-scroll h-screen p-7 sm:flex items-center justify-center" style={{ backgroundImage: "url(" + sun + ")" }}>
      <div className=" bg-white bg-opacity-75 rounded-2xl p-3 sm:w-1/2">
      <CityInput updateWeatherData={updateWeatherData}/>
      <MainContainer weatherData={weatherData}/>
      <AddInfo weatherData={weatherData}/>
      </div>
      </div>  
    </>
  )
}

export default App