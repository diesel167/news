import React, { useEffect, useState } from 'react';
import Geo from '../utils/GeoApi'
import {useSelector, useDispatch} from 'react-redux'

function UserData() {
  let [isInitial,setInitial] = useState(true);
  const city = useSelector(state => state.city);
  const country = useSelector(state => state.country);
  const dispatch = useDispatch();

  useEffect( ()=>{
    //get geo data for user
    if(isInitial){
      setInitial(false); //to prevent rerenders
      Geo.get('/').then((e)=>{
        dispatch({type: 'COORDINATES', payload: {lat:e.data.country.lat ,lon:e.data.country.lon}});
        dispatch({type: 'CITY', payload: e.data.country.capital_ru});
        dispatch({type: 'COUNTRY', payload: e.data.country.name_ru});
      });
    }
  });

  let content = <div>Hello!</div>;
  if(city && country ){
    content = `Погода в ${city}, ${country}`;
  }

  return (
      <div className="user-data">
        {content}
      </div>
  );
}

export default UserData;