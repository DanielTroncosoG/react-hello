import React, { Component } from "react";
import "./Card.css";

class card extends Component {
  render() {
    return (
      <div className="card ">
        <img
          class="card-img-top  mx-auto"
          src="https://www.metaltoad.com/sites/default/files/styles/large/public/2020-05/worked-fine-in-dev-blog-header.jpg?itok=NreJJK08"
          alt="Card image cap"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a class="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    );
  }
}

export default card;
