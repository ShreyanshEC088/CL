import logo from './logo.svg';
import image from './Components/sunset.jpg'
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    dest: PropTypes.string,
  };
  render() {
    // const {dest} =this.state;
    return (
      <div className="app-container">
        <Navbar/>
        <Weather/>
      </div>
    )
  }
}

