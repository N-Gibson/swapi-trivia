import React from 'react'
import CharacterCard from '../characters/CharacterCard';
import './FavoritesContainer.scss'

const FavoritesContainer = (props) => {
  console.log(props)
  let character = props.characters.map(character => <CharacterCard character={character} />)
  return (
    <section className='favorite-characters'>
      <h2 className='favorite-characters-h2'>Favorite Characters</h2>
      {character}
    </section>
  )
}

export default FavoritesContainer