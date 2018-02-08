import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import normalize from 'normalize.css';


export default class App extends Component {
  render() {
    return (		
		<div className="app">
			<h1>So what’s the weather like?</h1>
    		<SearchBar />
			<WeatherList />
		</div>
    );
  }
}
