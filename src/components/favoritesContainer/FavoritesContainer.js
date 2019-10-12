import React from 'react'
import CharacterCard from '../characters/CharacterCard';

const FavoritesContainer = (props) => {
  let favoriteCharacters = props.characters.reduce((acc, character) => {
    if(character.isFavorite === true) {
      acc.push(character)
    }
    return acc
  }, [])

  let character = favoriteCharacters.map(character => <CharacterCard character={character} />)
  return (
    <section className='favorite-characters'>
      <h2>Favorite Characters</h2>
      {character}
    </section>
  )
}

export default FavoritesContainer