import React, { Component } from 'react';
import WeatherComp from './WeatherComp';;

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      inputValue: '',
      dest: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = async () => {
    const inputValue = this.state.inputValue;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=32d3c6e6590d4a0f903170116230207&q=${inputValue}&days=1&aqi=no&alerts=no`;
    
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: [data], loading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "30px", color: "black" }}></h1>
        <div className="container">
          <div class="input-group mb-3">
            <input type="text" class="form-control opacity-75" onChange={this.handleInputChange} placeholder="Enter City.." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-dark" onClick={this.handleSubmit} type="button" id="button-addon2">Search</button>
          </div>
        </div>
        <div className="row">
          {!loading &&
            articles.map((element) => (
              <div key={element.location?.name}>
                <WeatherComp
                  place={element.location?.name || alert("Error Enter Correct Location")}
                  currTemp={element.current?.temp_c }
                  text={element.current?.condition.text }
                  icon={element.current?.condition.icon }
                  max={element.forecast?.forecastday[0]?.day.maxtemp_c }
                  min={element.forecast?.forecastday[0]?.day.mintemp_c }
                  feel={element.current?.feelslike_c}
                  press={element.current?.pressure_mb }
                  humid={element.current?.humidity }
                  wind={element.current?.wind_kph }
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
