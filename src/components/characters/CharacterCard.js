import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
  let { films, homeworld, name, species } = props.character
  if(species === undefined) {
    species = 'Unknown'
  }
  let characterFilms = films.map(film => <p>{film}</p>)

  return (
    <article>
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