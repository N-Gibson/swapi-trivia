import React from 'react';
import CharacterCard from '../characters/CharacterCard';
import './characterContainer.scss'
import Nav from '../nav/nav'

const CharacterContainer = ({ characters, favoriteCharacter, orderColor, name, favQuote, rank, movieNumber, movieTitle, scroll}) => {
  const character = characters.slice(0, 10).map(character => <CharacterCard character={character} 
    favoriteCharacter={favoriteCharacter}
    orderColor={orderColor} />)

  let episodeNumber
    if(movieNumber == 1) {
      episodeNumber = 'I'
    }
    if(movieNumber == 2) {
      episodeNumber = 'II'
    }
    if(movieNumber == 3) {
      episodeNumber = 'III'
    }
    if(movieNumber == 4) {
      episodeNumber = 'IV'
    }
    if(movieNumber == 5) {
      episodeNumber = 'V'
    }
    if(movieNumber == 6) {
      episodeNumber = 'VI'
    }

  return (
    <section className='container'>
      <div className='fade'>
          <Nav 
            orderColor={orderColor} 
            name={name} 
            favQuote={favQuote} 
            rank={rank} /></div>
      <div className='star-wars-crawl'>
        <div className='crawl'>
        <div className='title'>
          <h3>{`Episode ${episodeNumber}`}</h3>
          <h2>{movieTitle}</h2>
        </div>
        {scroll}
      </div>
      </div>
    <div className ='character-container'>
      {character}
    </div>
    </section>

export default CharacterContainer