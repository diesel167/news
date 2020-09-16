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

function App() {
  const news = useSelector(state => state.news);
  return (
    <div className="app">
      <UserData/>
      <Weather/>
      <NewsToggler/>
      <News/>
      <div className="loader">
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
