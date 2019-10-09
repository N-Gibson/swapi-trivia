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
      rank: '',
      formError: ''
    }
  }

  componentDidMount() {
    const swapiFilmsUrl = 'https://swapi.co/api/films';
    apiCalls(swapiFilmsUrl)
      .then(res => console.log("DATA", res))
    // console.log("Head", apiCalls(swapiFilmsUrl))
  }

  handleForm = (formName, formQuote, formRank) => {
    if(formName === '' || formQuote === '') {
      // console.log("it's empty")
      this.setState({error: 'Fill it all!'})
    } else {
      this.setState({ name: formName, favQuote: formQuote, rank: formRank, error: ''})
      
    }
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <Splash handleForm={this.handleForm}/>
      </main>
    )
  }
}

export default App;