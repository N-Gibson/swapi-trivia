import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss'

const Nav = ({orderColor, name, favQuote, rank}) => {
  return (
    <nav>
      <h2 className='favorite-quote-h2'
          id={orderColor} >{favQuote}</h2>      
      <div className='splash-div' >
          <h1 className='splash-starwars-h1' id={orderColor} >Star</h1>
          <h2 className='splash-starwars-h2'>A Trivia Story</h2>
          <h1 className='splash-starwars-h1' id={orderColor} >Wars</h1>
      </div>
      <div className='user-div'>
        <h1 className='user-name-h1' 
          id={orderColor} >{`Hello ${name}`}</h1>
        <h2 className='user-rank-h2' 
          id={orderColor} >{`A ${rank}`}</h2>
        <Link className='favorite-char-a' 
          to='/movies/characters/favorites'>
            <button className='favorite-char-btn' type='button' 
            id={orderColor} >Fav. Characters</button>
        </Link>
        <Link className='logout-a' 
          to='/'>
          <button className='logout-btn' 
            type='button'
            id={orderColor} >Log Out</button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;