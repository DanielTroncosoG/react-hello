import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron jumbotron-fluid">
  <h1 className="display-4">A Warm Welcome!</h1>
  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula sem, vulputate et lectus a, consequat suscipit lectus. Proin facilisis, ante vel commodo tincidunt, nulla erat faucibus leo, sed pharetra tellus dolor malesuada ex. </p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
</div>
        )
}
}


export default Jumbotron