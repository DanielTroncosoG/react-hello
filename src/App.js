import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Jumbotron from "./Components/Jumbotron/Jumbotron"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container bg-light">
      <Jumbotron />
      </div>
    </div>
  );
  }

export default App;
