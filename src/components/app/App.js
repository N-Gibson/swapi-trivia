import React, { Component } from 'react';
import './App.css';
import { apiCalls } from './apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true
    }
  }

  componentDidMount() {
    const swapiFilmsUrl = 'https://swapi.co/api/films';
    apiCalls(swapiFilmsUrl)
      .then(res => console.log("DATA", res))
    // console.log("Head", apiCalls(swapiFilmsUrl))
  }

  render() {
    return (
      <main>
        hello
      </main>
    )
  }
}

export default App;