import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <Button bsStyle="primary" onClick={this.props.fetchCountryList()}>Primary</Button>
        </header>
      </div>
    );
  }
}

App.propTypes = {
    fetchCountryList: PropTypes.func.isRequired,
};

export default App;
