import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Jumbotron from "./Components/Jumbotron/Jumbotron"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar brand="Start Bootstrap" firstItem="Home" secondItem="About" thirdItem="Services" fourthItem="Contact" />
      <div className="container bg-light">
      <Jumbotron title="A Warm Welcome!" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula sem, vulputate et lectus a, consequat suscipit lectus. Proin facilisis, ante vel commodo tincidunt, nulla erat faucibus leo, sed pharetra tellus dolor malesuada ex." button="Call to action"/>
      </div>
    </div>
  );
  }

export default App;
