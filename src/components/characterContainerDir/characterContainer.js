import React from 'react';
import CharacterCard from '../characters/CharacterCard';
import Nav from '../nav/nav';
import './characterContainer.scss'

const CharacterContainer = (props) => {
  console.log('char cont props', props.scroll)
  console.log(props.movieTitle)
  const character = props.characters.map(character => <CharacterCard character={character} favoriteCharacter={props.favoriteCharacter}/>)

  let episodeNumber
    if(props.movieNumber == 1) {
      episodeNumber = 'I'
    }
    if(props.movieNumber == 2) {
      episodeNumber = 'II'
    }
    if(props.movieNumber == 3) {
      episodeNumber = 'III'
    }
    if(props.movieNumber == 4) {
      episodeNumber = 'IV'
    }
    if(props.movieNumber == 5) {
      episodeNumber = 'V'
    }
    if(props.movieNumber == 6) {
      episodeNumber = 'VI'
    }

  return (
    <section className='container'>
      <div className='fade'>
        <Nav />
      </div>
      <div className='star-wars-crawl'>
        <div className='crawl'>
        <div className='title'>
          <h3>{`Episode ${episodeNumber}`}</h3>
          <h2>{props.movieTitle}</h2>
        </div>
        {props.scroll}
      </div>
      </div>
    <div className ='character-container'>
      {character}
    </div>
    </section>
  )
}

export default CharacterContainer