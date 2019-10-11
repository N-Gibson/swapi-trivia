import React from 'react'
import './MoviesContainer.css'
import MovieCard from '../movieCardDir/movieCard'


const MoviesContainer = (props) => {
  console.log("props.movies[0]", props.movies[0])
  return (
    <section className='movie-container'>
      {props.movies.map(movie => {
        console.log(movie.image)
        return <MovieCard 
          image={movie.image}
          title={movie.title}
          releaseDate={movie.release_date}
          id={movie.episode_id}
          key={movie.episode_id}
        />
      })}
    </section>
  )
}

export default MoviesContainer