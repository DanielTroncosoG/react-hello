import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-fluid navbar-expand-lg bg-dark">
  <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Contact</a>
      </li>
    </ul>
  </div>
        </nav>
        )
}
}


export default Navbar