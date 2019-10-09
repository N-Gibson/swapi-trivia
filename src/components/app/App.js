import React, { Component } from 'react';
import './App.css';
import { apiCalls } from './apiCalls';
import Splash from '../splash/splash';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
      name: '',
      favQuote: '',
      rank: ''
    }
  }

  componentDidMount() {
    const swapiFilmsUrl = 'https://swapi.co/api/films';
    apiCalls(swapiFilmsUrl)
      .then(res => console.log("DATA", res))
    // console.log("Head", apiCalls(swapiFilmsUrl))
  }

  handleForm(formName, formQuote, formRank) {
    this.setState({ name: formName, favQuote: formQuote, rank: formRank})
  }

  render() {
    return (
      <main>
        <Splash handleForm={this.handleForm}/>
      </main>
    )
  }
}

export default App;