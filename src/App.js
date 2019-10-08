import React, { Component } from 'react';
import './App.css';
import { apiCalls } from './apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    const swapiFilmsUrl = 'https://swapi.co/api/films';
    apiCalls(swapiFilmsUrl)
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