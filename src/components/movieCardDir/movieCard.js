import React from 'react'
import { Link } from 'react-router-dom';
import './movieCard.css'


const MovieCard = (props) => {
  console.log("movieCard", props)
  return (
    <Link to={`movies/${props.id}/characters`}>
      <article>
        <img src={props.image} />
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
      </article>
    </Link>
  )
}

export default MovieCard;
