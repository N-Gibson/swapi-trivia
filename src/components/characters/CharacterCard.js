import React from 'react';
import { Link } from 'react-router-dom';
import './characters.scss';

const Character = (props) => {
  let { films, homeworld, name, species } = props.character
  if(species === undefined) {
    species = 'Unknown'
  }
  let characterFilms = films.map(film => <p>{film}</p>)

  return (
    <article className='character-card'>
      <button type='button'> ⭐</button>
      <p>{name}</p>
      <p>{homeworld[0]}</p>
      <p>{homeworld[1]}</p>
      <p>{species}</p>
      <div>
        {characterFilms}
      </div>
    </article>
  )
}

export default Character