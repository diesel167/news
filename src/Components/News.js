import React, { useEffect, useState } from 'react';
import NewsApi from "../utils/NewsApi";
import NewsItem from "./NewsItem";

import { useDispatch, useSelector} from "react-redux";

function News() {
  const dispatch = useDispatch();
  let url = useSelector(state=>state.url);
  useEffect( ()=>{
  //get news
      NewsApi.get(url).then((e)=>{
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(e.data,"text/xml");
        let arrOfNews = [...xmlDoc.getElementsByTagName('item')];
        dispatch({type: 'NEWS', payload: arrOfNews});
      });

  },[url, dispatch]);

  return <div className='news'>
    <NewsItem/>
  </div>
}

export default News;