import React from 'react';
import './App.css';
import UserData from "./Components/UserData";
import Weather from "./Components/Weather";
import News from "./Components/News";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { RingLoader } from 'react-spinners';
import { useSelector } from "react-redux";
import NewsToggler from "./Components/NewsToggler";
import './normalize.css'

function App() {
  const news = useSelector(state => state.news);
  return (
    <div className="app">
      <div className='header'>
        <div className="info">
          <div className="logo">news.</div>
          <UserData/>
          <Weather/>
        </div>
        <NewsToggler/>
      </div>
      <News/>
      <div className={`loader ${!news?'':'hide'}`}>
        <RingLoader
            color={'#123abc'}
            loading={!news}
        />
      </div>
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
