import React from 'react'
import CharacterCard from '../characters/CharacterCard';
import './FavoritesContainer.scss';
import Nav from '../nav/nav';

const FavoritesContainer = ({ characters, orderColor, name, favQuote, rank, favoriteCharacter}) => {
  let favoriteCharacters = characters.reduce((acc, character) => {
    if(character.isFavorite === true) {
      acc.push(character)
    }
    return acc
  }, [])

  let character = favoriteCharacters.map(character => <CharacterCard character={character} favoriteCharacter={favoriteCharacter} orderColor={orderColor}/>)

  return (
    <>
    <Nav 
      orderColor={orderColor} 
      name={name} 
      favQuote={favQuote} 
      rank={rank} />
      <h2 className='favorite-characters-h2'>Favorite Characters</h2>
    <section className='favorite-characters'>
      <p>Number of favorites: {favoriteCharacters.length}</p>
      {character}
    </section>
    </>
  )
}

export default FavoritesContainer