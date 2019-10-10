import React, { Component } from 'react';
import './App.css';
import { apiCalls } from './apiCalls';
import { Route } from 'react-router-dom'
import Splash from '../splash/splash';
import Movies from '../movies/movies'
import Nav from '../nav/nav'
import imageUrls from './imageUrls'
import SampleData from './SampleData'

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
      .then(films => {
        return films.sort((a, b) => {
          return a.episode_id - b.episode_id
        })
      })
      .then(films => {
        return films.map((film, index) => ({...film, image: imageUrls[index]}))
      })
      .then(films => this.setState({movies: films}))
      
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
    console.log("state", this.state.movies)
    return (
      <main>
        {/* <Splash handleForm={this.handleForm}/> */}
        <Nav />
        <Movies 
          movies={this.state.movies} 
          />
      </main>
    )
  }
}

export default App;