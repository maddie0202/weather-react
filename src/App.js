import React from 'react';
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
        <Weather defaultCity = {"Paris"}/>
       <footer>
        This project was coded by Mahdieh, and it's <a href="https://github.com/maddie0202/weather-react" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>
       </footer>
    </div>
  );
}

export default App;

