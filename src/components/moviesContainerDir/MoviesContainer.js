import React from 'react'
import './MoviesContainer.scss'
import MovieCard from '../movieCardDir/movieCard'
import Nav from '../nav/nav'


const MoviesContainer = ({ movies, orderColor, name, favQuote, rank }) => {
  return (
    <>
      <Nav 
          orderColor={orderColor} 
          name={name} 
          favQuote={favQuote} 
          rank={rank} />
      <section className='movie-container'>
        {movies.map(movie => {
          return <MovieCard 
            image={movie.image}
            title={movie.title}
            releaseDate={movie.release_date}
            id={movie.episode_id}
            key={movie.episode_id}
            trailer={movie.trailer}
            orderColor={orderColor} 
          />
        })}
      </section>
    </>
  )
}

export default MoviesContainer