import React, { useEffect } from 'react';
import Wea from '../utils/WeatherApi'
import {useSelector, useDispatch} from 'react-redux'

function Weather() {
  const dispatch = useDispatch();
  const coordinates = useSelector(state => state.coordinates);
  const temperature = useSelector(state => state.temperature);
  useEffect( ()=>{
    //get geo data for user
    if(coordinates){
      Wea.get(`/?lat=${coordinates.lat}&lon=${coordinates.lon}&key=e50813fb6b9044cf98685ba2d687c329`).then((e)=>{
        dispatch({type: 'TEMPERATURE', payload: e.data.data[0].temp});
      });
    }
  });

  return <div className='weather'>{temperature?temperature:0}</div>
}

export default Weather;