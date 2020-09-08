import React from 'react';
import './App.css';
import UserData from "./Components/UserData";
import Weather from "./Components/Weather";
import News from "./Components/News";

function App() {
  return (
    <div className="App">
      <UserData/>
      <Weather/>
      <News/>
    </div>
  );
}

export default App;
