import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Navbar.css';

function Navbar({brand, firstItem, secondItem, thirdItem, fourthItem}){
        return(
            <nav className="navbar navbar-fluid navbar-expand-lg bg-dark">
  <a className="navbar-brand text-light" href="#">{brand}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">{firstItem}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">{secondItem}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">{thirdItem}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">{fourthItem}</a>
      </li>
    </ul>
  </div>
        </nav>
        )

}

export default Navbar