import React from 'react';
import CharacterCard from '../characters/CharacterCard';
import './characterContainer.css'

const CharacterContainer = (props) => {
  const character = props.characters.map(character => <CharacterCard character={character}/>)
  return (
    <section className='character-container'>
      {character}
    </section>
  )
}

export default CharacterContainer