import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Navigation() {

  const parser = new DOMParser();
  const tofirst = parser.parseFromString(`<!doctype html><body>	&#171;`, 'text/html').body.textContent;
  const tolast = parser.parseFromString(`<!doctype html><body>	&#187;`, 'text/html').body.textContent;
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  let count = 0;  //how many pages we have
  const newsPerPage = 12; //if 12 news per page
  if(news){
    count = Math.ceil(news.length / newsPerPage);
  }

  let [currentPage, setCurrentPage] = useState(1);

  const setPageNum = (changeEvent) => {
    if(typeof(changeEvent)==='number'){
      let begin = changeEvent*newsPerPage-newsPerPage;
      let end = changeEvent*newsPerPage > news.length ? news.length : changeEvent*newsPerPage;
      dispatch({type: 'CHANGE_SHOWING', payload: {begin: begin, end: end}});
      setCurrentPage(changeEvent);
    }
    else{
      let begin = changeEvent.target.innerHTML*newsPerPage-newsPerPage;
      let end = changeEvent.target.innerHTML*newsPerPage > news.length ? news.length : changeEvent.target.innerHTML*newsPerPage;
      dispatch({type: 'CHANGE_SHOWING', payload: {begin: begin, end: end}});
      setCurrentPage(changeEvent.target.innerHTML);
    }

  };

  const generatePageNumButtons = () => {
    let buttonsNum = [];
    let i;
    //dont move 'radio' navigation at the beginning
    if(currentPage<=3 || count<=5){
      i = 1;
    }
    //move 'radio' navigation
    if(currentPage>3 && count>5 && currentPage <= count-2){
      i = currentPage-2;
    }
    //dont move 'radio' navigation in the end
    if(currentPage>3 && count>5 && currentPage>count-2){
      i = count-4;
    }
    for(let j = i; j <= i+4; j++){
      let temp ='';
      if(j<=count){
        temp = <div key={count*j} className="btn" onClick={setPageNum}>{j}</div>;
      }
      if(+j === +currentPage){
        temp = <div key={count*j} className="btn" style={{color:'white'}} onClick={setPageNum}>{j}</div>;
      }
      buttonsNum.push(temp);
    }
    return buttonsNum;
  };

  return <div className='navbar'>
    <div className="btn" onClick={()=>setPageNum(1)}>{tofirst}</div>
      {generatePageNumButtons()}
       | of {count}
    <div className="btn" onClick={()=>setPageNum(count)}>{tolast}</div>
  </div>
}

export default Navigation;