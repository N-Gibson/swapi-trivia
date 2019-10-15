import React from 'react'
import { Link } from 'react-router-dom';
import './movieCard.scss'


const MovieCard = ({id, image, title, releaseDate, orderColor, trailer}) => {
  let newReleaseDate = releaseDate.split('-')
  newReleaseDate = `${newReleaseDate[1]}/${newReleaseDate[2]}/${newReleaseDate[0]}`

  return (
    <article id={orderColor}>
      <Link className='movie-a-tag' 
        to={`/movies/${id}/characters`} >
        <img src={image} 
          alt='movie poster'/>
        <h2 className='movie-title-h2'
        id={orderColor}>Episode {id}</h2>
        <h2 className='movie-title-h2'
          id={orderColor} >{title}</h2>
        <h3 className='release-date-h3'
          id={orderColor} >{newReleaseDate}</h3>
      </Link>
        <a className='trailer' 
          href={trailer}
          id={orderColor}
          target='_blank'
          rel="noopener noreferrer">View Trailer</a>
    </article>
  )
}

export default MovieCard;
