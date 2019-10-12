import React from 'react'
import CharacterCard from '../characters/CharacterCard';

const FavoritesContainer = (props) => {
  console.log('favorites props', props)
  return (
    <section className='favorite-characters'>
      <h2>Favorite Characters</h2>
      <CharacterCard />
    </section>
  )
}

export default FavoritesContainer