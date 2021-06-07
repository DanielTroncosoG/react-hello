import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import Jumbotron from "./Components/Jumbotron/Jumbotron"
import Footer from "./Components/Footer/Footer"
import Card from "./Components/Card/Card";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar brand="Start Bootstrap" firstItem="Home" secondItem="About" thirdItem="Services" fourthItem="Contact" />
      <div className="container bg-light">
      <Jumbotron title="A Warm Welcome!" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula sem, vulputate et lectus a, consequat suscipit lectus. Proin facilisis, ante vel commodo tincidunt, nulla erat faucibus leo, sed pharetra tellus dolor malesuada ex." button="Call to action"/>
        <div className="row  row-cols-1 row-cols-sm-2 row-cols-lg-4  ">
          <div className="col-3 ">
            {" "}
            <Card />
          </div>
          <div className="col-3 ">
            {" "}
            <Card />
          </div>
          <div className="col-3 ">
            {" "}
            <Card />
          </div>
          <div className="col-3 ">
            {" "}
            <Card />
          </div>
        </div>
      </div>
      <Footer copyright="Copyright©" copyname="YourWebsite 2021" />
    </div>
  );
}

export default App;
