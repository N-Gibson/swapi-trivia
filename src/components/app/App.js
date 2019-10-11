import React, { Component } from 'react';
import './App.css';
import { apiCalls } from './apiCalls';
import { Route } from 'react-router-dom'
import Splash from '../splash/splash';
import MoviesContainer from '../moviesContainerDir/MoviesContainer'
import Nav from '../nav/nav'
import imageUrls from './imageUrls'
import SampleData from './SampleData'
import CharacterContainer from '../characterContainerDir/characterContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: SampleData,
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
        <Route exact path='/' render={() => <Splash handleForm={this.handleForm}/>} />
        <Nav />
        <Route exact path='/movies' render={() => {
          return <MoviesContainer movies={this.state.movies} />
        }} />
      <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters

        return (<CharacterContainer characters={characters}/>)
      }} />
        

      </main>
    )
  }
}

export default App;