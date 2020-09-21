import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import './NewsToggler.css'

function NewsToggler() {
  const dispatch = useDispatch();
  const [lastNews, setLastNews] = useState('lastNews');
  useEffect( ()=>{
    if(lastNews === 'mainNews'){
      dispatch({type: 'CHANGE_URL', payload: '/index.rss'});
    }
    else{
      dispatch({type: 'CHANGE_URL', payload: '/all.rss'});
    }
  },[lastNews, dispatch]);
  return <div className="news-toggler">
    <p className='choose-news'>Последние новости</p>
    <div className='switch-wrapper'>
      <label className="switch">
        <input type="checkbox"
               onChange={()=>{
                 if(lastNews === 'mainNews'){
                   setLastNews('lastNews');
                 }
                 else{
                   setLastNews('mainNews');
                 }
               }}/>
        <span className="slider round"/>
      </label>
    </div>
    <p className='choose-news'>Главные новости</p>
  </div>
}

export default NewsToggler;