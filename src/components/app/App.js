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
      rank: 'Initiate',
      formError: '',
      orderColor: '',
      orderRank: ['Initiate', 'Gray Master', 'Gray Grandmaster'],
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
        return films.map((film, index) => ({...film, image: imageUrls[index].image, trailer: imageUrls[index].trailer}))
      })
      .then(films => this.setState({movies: films}))
  }

  handleOrderColor = (event) => {
    if(event.target.parentNode.className.includes('jedi-btn')) {
      this.setState({orderColor: 'jediColor', orderRank: ['Padawan', 'Jedi Master', 'Grand Master of the Jedi'], rank: 'Padawan'})
    } else if(event.target.parentNode.className.includes('sith-btn')) {
      this.setState({orderColor: 'sithColor', orderRank: ['Apprentice', 'Sith Master', 'Dark Lord of the Sith'], rank: 'Apprentice'})
    }
  }

  handleFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  setRank = event => {
    this.setState({rank: event.target.value})
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
    console.log(this.state.movies)
    return (
      <main>
        <Route exact path='/' render={() => <Splash 
        handleFormChange={this.handleFormChange} 
        handleOrderColor={this.handleOrderColor} 
        orderColor={this.state.orderColor} 
        orderRank={this.state.orderRank} 
        name={this.state.name} 
        favQuote={this.state.favQuote} 
        setRank={this.setRank} /> } />

        <Route exact path='/movies' render={() => {
          return <MoviesContainer 
            movies={this.state.movies} 
            orderColor={this.state.orderColor} 
            name={this.state.name} 
            favQuote={this.state.favQuote} 
            rank={this.state.rank}/>
        }} />

      <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
        const selectedMovie = this.state.movies.find(movie => movie.episode_id === parseInt(id))

        return (<CharacterContainer characters={characters}  favoriteCharacter={this.favoriteNewCharacter} scroll={selectedMovie.opening_crawl} movieTitle={selectedMovie.title} movieNumber={selectedMovie.episode_id}/>)
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