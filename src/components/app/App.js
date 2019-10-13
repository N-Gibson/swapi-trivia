import React, { Component } from 'react';
import './App.scss';
import { apiCalls } from './apiCalls';
import { Route } from 'react-router-dom';
import Splash from '../splash/splash';
import MoviesContainer from '../moviesContainerDir/MoviesContainer';
import Nav from '../nav/nav';
import imageUrls from './imageUrls';
import SampleData from './SampleData';
import CharacterContainer from '../characterContainerDir/characterContainer.js';
import FavoritesContainer from '../favoritesContainer/FavoritesContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: SampleData,
      loading: true,
      name: '',
      favQuote: '',
      rank: '',
      formError: '',
      orderColor: '',
      orderRank: [],
      favoriteCharacters: []
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

  handleOrderColor = (event) => {
    if(event.target.parentNode.className.includes('jedi-btn')) {
      this.setState({orderColor: 'jediColor', orderRank: ['Padawan', 'Jedi Master', 'Grand Master of the Jedi']})
    } else if(event.target.parentNode.className.includes('sith-btn')) {
      this.setState({orderColor: 'sithColor', orderRank: ['Apprentice', 'Sith Master', 'Dark Lord of the Sith']})
    }
  }

  handleForm = (formName, formQuote, formRank) => {
    if(formName === '' || formQuote === '') {
      // console.log("it's empty")
      this.setState({error: 'Fill it all!'})
    } else {
      this.setState({ name: formName, favQuote: formQuote, rank: formRank, error: ''})
      
    }
  }

  favoriteNewCharacter = (e) => {
    // let currentFavorites = this.state.favoriteCharacters;

    let characters= this.state.movies.reduce((acc, movie) => {
      acc.push(...movie.characters)
      return acc
    }, [])

    let movies = this.state.movies.map( movie => movie );
    let foundCharacter = characters.find(character => character.name === e.target.parentNode.children[1].innerText)
    let favorited = foundCharacter.isFavorite;
    foundCharacter.isFavorite = !favorited;
    this.setState({ movies });
  }

  render() {
    return (
      <main>
        <Route exact path='/' render={() => <Splash 
        handleForm={this.handleForm} 
        handleOrderColor={this.handleOrderColor} 
        orderColor={this.state.orderColor} 
        orderRank={this.state.orderRank} /> } />
        {/* <Nav /> */}

        <Route exact path='/movies' render={() => {
          return <MoviesContainer movies={this.state.movies} />
        }} />
      <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters

        return (<CharacterContainer characters={characters}  favoriteCharacter={this.favoriteNewCharacter}/>)
      }} />
      <Route exact path='/movies/characters/favorites' render={() => {
        return (
          <FavoritesContainer characters={this.state.movies.reduce((acc, movie) => {
            acc.push(...movie.characters)
            return acc
          }, [])} />
        )
      }} />
      </main>
    )
  }
}

export default App;