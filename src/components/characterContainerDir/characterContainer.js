import React from 'react';
import CharacterCard from '../characters/CharacterCard';

const CharacterContainer = (props) => {
  const character = props.characters.map(character => <CharacterCard character={character}/>)
  return (
    <section>
      <h2>hello</h2>
      {character}
    </section>
  )
}

export default CharacterContainer