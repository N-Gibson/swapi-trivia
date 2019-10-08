import React, { Component } from 'react';
import './App.css';
import { apiCalls } from '../../apiCalls'

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
      .then(data => this.setState({ movies: data, loading: false }))
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