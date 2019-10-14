import React from 'react'
import { Link } from 'react-router-dom';
import './movieCard.scss'


const MovieCard = ({id, image, title, releaseDate, orderColor, trailer}) => {
  let newReleaseDate = releaseDate.split('-')
  newReleaseDate = `${newReleaseDate[1]}/${newReleaseDate[2]}/${newReleaseDate[0]}`
  return (
    <Link className='movie-a-tag' to={`/movies/${id}/characters`}>
      <article id={orderColor}>
        <img src={image} />
        <h2 className='movie-title-h2'
          id={orderColor} >{title}</h2>
        <h3 className='release-date-h3'
          id={orderColor} >{newReleaseDate}</h3>
          <a className='trailer' 
            href={trailer}>View Trailer</a>
      </article>
    </Link>
  )
}

export default MovieCard;
