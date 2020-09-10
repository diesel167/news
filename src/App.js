import React from 'react';
import './App.css';
import UserData from "./Components/UserData";
import Weather from "./Components/Weather";
import News from "./Components/News";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <UserData/>
      <Weather/>
      <News/>
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
