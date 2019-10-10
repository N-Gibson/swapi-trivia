import React from 'react'
import './movieCard.css'


const MovieCard = (props) => {
  console.log("movieCard", props)
  return (
    <article>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}}</h3>
    </article>
  )
}

export default MovieCard;
