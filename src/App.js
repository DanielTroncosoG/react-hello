import React, { isValidElement } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Card from "./Components/Card/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container bg-light">
        <Jumbotron />
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
    </div>
  );
}

export default App;
