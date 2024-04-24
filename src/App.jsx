import MainContainer from './components/MainContainer';
import CityInput from './components/CityInput';
import AddInfo from './components/AddInfo';
import { useState } from 'react';
import sun from '../src/assets/images/sun.jpg'

function App() {
  const [weatherData, setweatherData] = useState({});
  const [msg, setmsg] = useState("");
  
  const updateWeatherData=(data)=>{
    if(data.cod==="404"){
      setmsg("Sorry! No data for city");
    }else if(data.cod===401){
      setmsg("Invalid API Key");
    }else{
      setmsg("");
      setweatherData(data);
    }
  }

  return (
    <>
    <div className=" bg-center bg-no-repeat bg-cover bg-scroll h-screen p-7 sm:flex items-center justify-center" style={{ backgroundImage: "url(" + sun + ")" }}>
      <div className=" bg-white bg-opacity-75 rounded-2xl p-3 sm:w-1/2">
      <CityInput updateWeatherData={updateWeatherData}/>
      {msg!=="" || Object.keys(weatherData).length === 0 ? <div className='font-bold text-2xl text-center my-3'>{msg}</div>:
      <>
      <MainContainer weatherData={weatherData}/>
      <AddInfo weatherData={weatherData}/>
      </>}
      </div>
      </div>  
    </>
  )
}

export default App