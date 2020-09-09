import React, { useEffect, useState } from 'react';
import NewsApi from "../utils/NewsApi";
import NewsItem from "./NewsItem";

import { useDispatch} from "react-redux";

function News() {
  let [isInitial,setInitial] = useState(true);
  const dispatch = useDispatch();
  useEffect( ()=>{
    if(isInitial){
      //get news
      NewsApi.get('/all.rss').then((e)=>{
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(e.data,"text/xml");
        let arrOfNews = [...xmlDoc.getElementsByTagName('item')];
        dispatch({type: 'NEWS', payload: arrOfNews});
        let item = arrOfNews[0];
        console.log(item);
      });
      setInitial(false);
    }
  },[isInitial, dispatch]);

  return <div className='news'>
    <NewsItem/>
  </div>
}

export default News;