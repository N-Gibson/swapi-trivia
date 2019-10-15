import React from 'react';
import './characters.scss';

const Character = ({ character, favoriteCharacter, orderColor}) => {
  let { films, homeworld, name, species } = character
  if(species === undefined) {
    species = 'Unknown'
  }
  let characterFilms = films.map(film => <p>{film}</p>)

  return (
    <article className='character-card'
    id={orderColor}>
      <h1 className='character-name-h1'
        id={orderColor}>{name}</h1>
        <div className='line'
          id={orderColor}></div>
      <h2 className='character-h2'
        id={orderColor}>Homeworld:</h2>
      <h2 className='character-h2'
        id={orderColor}>{homeworld[0]}</h2>
      <h2 className='character-h2'
        id={orderColor}>Population:</h2>
      <h2 className='character-h2'
        id={orderColor}>{homeworld[1]}</h2>
        <div className='line'
          id={orderColor}></div>

      <h2 className='character-h2'
        id={orderColor}>Species:</h2>
      <h2 className='character-h2'
        id={orderColor}>{species}</h2>
        <div className='line'
          id={orderColor}></div>
        <h2 className='character-h2'
        id={orderColor}>Appears In:</h2>
      <div>
        <h2 className='character-movie-h2'
          id={orderColor}>{characterFilms}</h2>
      </div>
      <button type='button' 
        className='favorite-character'
        id={orderColor}
        onClick={favoriteCharacter}>Favorite Character</button>
    </article>
  )
}

export default Character