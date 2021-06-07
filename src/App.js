import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar
        brand="Start Bootstrap"
        firstItem="Home"
        secondItem="About"
        thirdItem="Services"
        fourthItem="Contact"
      />
      <div className="container bg-light">
        <Jumbotron
          title="A Warm Welcome!"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula sem, vulputate et lectus a, consequat suscipit lectus. Proin facilisis, ante vel commodo tincidunt, nulla erat faucibus leo, sed pharetra tellus dolor malesuada ex."
          button="Call to action"
        />
        <div className="row  m-1 mt-5">
          <div className="col-md-3 col-sm-12">
            {" "}
            <Card
              textboton="Find Out More!"
              title="Card title"
              text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              url="https://www.metaltoad.com/sites/default/files/styles/large/public/2020-05/worked-fine-in-dev-blog-header.jpg?itok=NreJJK08"
            />
          </div>
          <div className="col-md-3 col-sm-12">
            {" "}
            <Card
              textboton="Find Out More!"
              title="Card title"
              text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              url="https://www.metaltoad.com/sites/default/files/styles/large/public/2020-05/worked-fine-in-dev-blog-header.jpg?itok=NreJJK08"
            />
          </div>
          <div className="col-md-3 col-sm-12 ">
            {" "}
            <Card
              textboton="Find Out More!"
              title="Card title"
              text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              url="https://www.metaltoad.com/sites/default/files/styles/large/public/2020-05/worked-fine-in-dev-blog-header.jpg?itok=NreJJK08"
            />
          </div>
          <div className="col-md-3 col-sm-12">
            {" "}
            <Card
              textboton="Find Out More!"
              title="Card title"
              text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              url="https://www.metaltoad.com/sites/default/files/styles/large/public/2020-05/worked-fine-in-dev-blog-header.jpg?itok=NreJJK08"
            />
          </div>
        </div>
      </div>
      <Footer copyright="Copyright©" copyname="YourWebsite 2021" />
    </div>
  );
}

export default App;
