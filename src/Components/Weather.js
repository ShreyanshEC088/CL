import React, { Component } from 'react';
import WeatherComp from './WeatherComp';
import PropTypes from 'prop-types';

export default class Weather extends Component {
  static defaultProps = {
    region: "bengaluru",
  };

  static propTypes = {
    region: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      inputValue: '',
      dest: '',
    };
  }

  async componentDidMount() {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=32d3c6e6590d4a0f903170116230207&q=${this.props.region}&days=1&aqi=no&alerts=no`;
    // const url = `http://api.weatherapi.com/v1/current.json?key=32d3c6e6590d4a0f903170116230207&q=${this.props.region}&aqi=yes`;
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
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }
  handleSubmit = () => {
    const inputValue = this.state.inputValue;
    alert(inputValue);
    this.setState({ dest: inputValue });
  }
  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "30px",color:"black"}}></h1>
        <div className="container">
          <div class="input-group mb-3">
            <input type="text" class="form-control opacity-75" onChange={this.handleInputChange} placeholder="Enter City.." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-dark" onClick={this.handleSubmit} type="button" id="button-addon2">Search</button>
          </div>
        </div>
        <div className="row">
          {!loading && articles.map((element) => (
            <div key={element.location.name}>
              <WeatherComp
                place={element.location?.name || ""}
                currTemp={element.current?.temp_c || ""}
                text={element.current?.condition.text || ""}
                icon={element.current?.condition.icon || ""}
                max={element.forecast.forecastday[0]?.day.maxtemp_c || ""}
                min={element.forecast.forecastday[0]?.day.mintemp_c || ""}
                feel={element.current?.feelslike_c||""}
                press={element.current?.pressure_mb||""}
                humid={element.current?.humidity||""}
                wind={element.current?.wind_kph||""}
              />
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

{/* {!loading && articles.map((element) => (
  <div key={element.location.name}>
    {element.location && element.location.name && element.location.name.length > 0 && element.forecast && element.forecast.forecastday && element.forecast.forecastday.length > 0 && (
      <WeatherComp
        place={element.location?.name || ""}
        currTemp={element.current?.temp_c || ""}
        text={element.current?.condition.text || ""}
        icon={element.current?.condition.icon || ""}
        max={element.forecast.forecastday[0]?.day.maxtemp_c || ""}
        min={element.forecast.forecastday[0]?.day.mintemp_c || ""}
      />
    )}
  </div>
))} */}