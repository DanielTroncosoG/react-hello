import React, { Component } from 'react';
import './Jumbotron.css';

function Jumbotron({ title, paragraph, button }) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{paragraph}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{button}</a>
        </div>
    )

}


export default Jumbotron