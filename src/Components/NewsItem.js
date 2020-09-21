import React from "react";
import { useSelector } from "react-redux";
import './NewsItem.css'

function NewsItem() {
  const news = useSelector(state => state.news);
  const showList = useSelector(state => state.showList);
  let list =[];
  if(news){
    news.map((item, i)=>{
      if(i<showList.end && i>=showList.begin){
        //if real news instead of commercial
        if(item.getElementsByTagName('enclosure')[0]){
          let url = item.getElementsByTagName('enclosure')[0].getAttribute('url');// url for image
          //if there is not title image we get the first image in the article
          if(url.slice(-3)==='mp4'){
            url = [...item.getElementsByTagName('media:content')]
                .filter(media=>media.getAttribute('url').slice(-3)!=='mp4')[0].getAttribute('url');
          }
          list.push(<div className='news-item' key={String(Symbol(i))}>
            <a className='link' href={item.getElementsByTagName('link')[0].innerHTML}>
              <img className='image' src={url} alt="Article visual content"/>
              <div className='title'>
                {item.getElementsByTagName('title')[0].innerHTML}
              </div>
            </a>
          </div>)
        }
      }
      return 1
    })
  }
  return <>{list.concat('')}</>
}

export default NewsItem;