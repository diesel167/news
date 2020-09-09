import React from "react";
import { useSelector } from "react-redux";


function NewsItem() {
  const news = useSelector(state => state.news);
  let list =[];
  if(news){
    news.map((item, i)=>{
      if(i<10){
        let url =item.getElementsByTagName('enclosure')[0].getAttribute('url'); // url for image
        list.push(<div className='news-item' key={String(Symbol(i))}>
          <a className='link' href={item.getElementsByTagName('link')[0].innerHTML}>
            <img className='image' src={url} alt=""/>
            <div className='title'>
              {item.getElementsByTagName('title')[0].innerHTML}
            </div>
          </a>
        </div>)
      }
      return 1
    })
  }
  return <>{list.concat('')}</>
}

export default NewsItem;