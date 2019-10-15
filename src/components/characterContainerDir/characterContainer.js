import React from 'react';
import CharacterCard from '../characters/CharacterCard';
import './characterContainer.scss'
import Nav from '../nav/nav'


const CharacterContainer = ({ characters, favoriteCharacter, orderColor, name, favQuote, rank}) => {
  const character = characters.map(character => <CharacterCard character={character} 
    favoriteCharacter={favoriteCharacter}
    orderColor={orderColor} />)

  return (
    <>
      <Nav 
            orderColor={orderColor} 
            name={name} 
            favQuote={favQuote} 
            rank={rank} />
      <section className='character-container'>
        {character}
      </section>
    </>
  )
}

export default CharacterContainer