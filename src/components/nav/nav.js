import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss'

const Nav = () => {
  return (
    <nav>
      <p>Favorite Quote</p>
      <div>  
        <h1>Star Wars</h1>
        <h2>Hello user, RANK</h2>
        <Link to='/'>
          <button type='button'>Log Out</button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;