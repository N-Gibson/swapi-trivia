import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './splash.css'

const Splash = (props) => {
  return (
    <form>
      <input type='text' placeholder='Enter Name'></input>
      <input type='text' placeholder='Enter Favorite Quote'></input>
      <select>
        <option className='padawan' value='Padawan'>Padawan</option>
        <option className='jedi-knight'  value='Jedi Knight'>Jedi Knight</option>
        <option className='jedi-master' value='Jedi Master'>Jedi Master</option>
      </select>
      <Link to='/movies'>
        <button type='button' onClick={e => {
          // let name = e.target.parentElement.firstChild.value
          // let quote = e.target.parentElement.childNodes[1].value
          // let rank = e.target.parentElement.childNodes[2].value
          // props.handleForm(name, quote, rank)
        }
      }>Jump to Light Speed</button>
      </Link>
    </form>
    )
}

export default Splash;