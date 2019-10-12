import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './splash.css'
import jediBold from '../../icons/jedi_bold.svg'
import sithBold from '../../icons/sith_bold.svg'


const Splash = (props) => {
  return (
    <section className='splash-container'>
      <div className='splash-div'>
      <h1 className='splash-starwars-h1'>Star</h1>
      <h2 className='splash-starwars-h2'>A Trivia Story</h2>
      <h1 className='splash-starwars-h1'>Wars</h1>
      </div>
      <form>
        <input type='text' placeholder='Enter Name'></input>
        <h2 className='splash-starwars-h2'>Jedi or Sith?</h2>
        <div className='jedi-or-sith-div'>
          <button className='order-button' type='button'>
            <img className='jedi-icon' src={jediBold} />
          </button>
          <button className='order-button' type='button'>
          <img className='jedi-icon' src={sithBold} />
          </button>
        </div>

        {/* <input type='text' placeholder='Enter Favorite Quote'></input> */}
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
    </section>
    )
}

export default Splash;