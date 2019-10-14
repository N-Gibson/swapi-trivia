import React from 'react'
import CharacterCard from '../characters/CharacterCard';
import './FavoritesContainer.scss'

const FavoritesContainer = (props) => {
  let favoriteCharacters = props.characters.reduce((acc, character) => {
    if(character.isFavorite === true) {
      acc.push(character)
    }
    return acc
  }, [])

  let character = favoriteCharacters.map(character => <CharacterCard character={character}/>)

  return (
    <section className='favorite-characters'>
      <h2 className='favorite-characters-h2'>Favorite Characters</h2>
      <p>Number of favorites: {favoriteCharacters.length}</p>
      {character}
    </section>
  )
}

export default FavoritesContainer