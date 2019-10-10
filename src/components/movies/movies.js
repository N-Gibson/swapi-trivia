import React from 'react'
import './movies.css'
import MovieCard from '../movieCard/movieCard'


const Movies = (props) => {
  console.log("props.movies[0]", props.movies[0])
  return (
    <section>
      {props.movies.map(movie => {
        console.log(movie.image)
        return <MovieCard 
          image={movie.image}
          title={movie.title}
          releaseDate={movie.release_date}
          key={movie.episode_id}
        />
      })}
    </section>
  )
}

export default Movies