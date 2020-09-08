import React, { useEffect, useState } from 'react';
import NewsApi from "../utils/NewsApi";

function News() {

  let [last, setLast] = useState(null);
  let [isInitial,setInitial] = useState(true);
  useEffect( ()=>{
    if(isInitial){
      //get news
      NewsApi.get('/all.rss').then((e)=>{
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(e.data,"text/xml");
        let arrOfNews = [...xmlDoc.getElementsByTagName('item')];
        let item = arrOfNews[0];
        let title = item.getElementsByTagName('title')[0].innerHTML;
        setLast(title);
      });
      setInitial(false);
    }



  },[last]);
  console.log(last);
  return <div className='news'>
    {last?last:'hi'}
  </div>
}

export default News;