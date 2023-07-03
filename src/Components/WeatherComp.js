import React, { Component } from 'react';

export default class WeatherComp extends Component {
  render() {
    const { place, currTemp, icon, text, max, min, press, humid, wind, feel } = this.props;
    return (
      <div>
        <div className="Comp-contain">
          <div className="d-flex flex-column flex-md-row justify-content-between main">
            <div className="first">
              <h5>{place}</h5>
              <img style={{ height: "100px", width: "100px" }} src={icon} alt="icon" />
              <h5>{text}</h5>
            </div>
            <div className="first">
              <h1 style={{ fontSize: "5rem" }}>{currTemp}&deg;C</h1>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="main first">
              <span>&darr; Min</span>
              <h3>{min}&deg;C</h3>
            </div>
            <div className="main first">
              <span>&uarr; Max</span>
              <h3>{max}&deg;C</h3>
            </div>
            <div className="main first">
              <span>Feels Like</span>
              <h3>{feel}&deg;C</h3>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="first main">
              <span>Pressure</span>
              <h3>{press}mb</h3>
            </div>
            <div className="first main">
              <span>Humidity</span>
              <h3>{humid}%</h3>
            </div>
            <div className="first main">
              <span>Wind Speed</span>
              <h3>{wind}k/h</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
