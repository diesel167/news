import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import NewsApi from "../utils/NewsApi";


function NewsToggler() {
  const dispatch = useDispatch();
  const [lastNews, setLastNews] = useState('lastNews');
  const url = useSelector(state=>state.url);
  useEffect( ()=>{
    console.log(lastNews);

    if(lastNews === 'mainNews'){
      dispatch({type: 'CHANGE_URL', payload: '/index.rss'});
    }
    else{
      dispatch({type: 'CHANGE_URL', payload: '/all.rss'});
    }
    console.log(url);
  },[lastNews, dispatch]);
  return <div className="news-toggler">
    <button onClick={()=>setLastNews('mainNews')}> main</button>
    <button onClick={()=>setLastNews('lastNews')}> last</button>
  </div>
}

export default NewsToggler;