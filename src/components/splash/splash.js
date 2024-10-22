import React from 'react';
import { Link } from 'react-router-dom';
import './splash.scss'
import jediBold from '../../icons/jedi_bold.svg'
import sithBold from '../../icons/sith_bold.svg'

const Splash = ({ handleFormChange, handleOrderColor, orderColor, orderRank, name, favQuote, setRank }) => {
  let handleJumpToLightSpeedBtn;
    if(name !== '' & favQuote !== '') {
      handleJumpToLightSpeedBtn = (
      <Link to='/movies'>
        <button 
        className='jump-to-light-speeb-btn' 
        id={orderColor} 
        type='button'
        >Jump to Light Speed</button>
      </Link>)
    }

  return (
    <section className='splash-container'>
      <div className='splash-div' >
        <h1 className='splash-starwars-h1' 
          id={orderColor} >Star</h1>
        <h2 className='splash-starwars-h2'>A Trivia Story</h2>
        <h1 className='splash-starwars-h1' 
          id={orderColor} >Wars</h1>
      </div>
      <form id={orderColor}>
        <input type='text' 
          placeholder='Enter Name'
          name='name' 
          onChange={event => handleFormChange(event)}></input>
        <h2 className='splash-starwars-h2' 
          id={orderColor} >Jedi or Sith</h2>
        <div className='jedi-or-sith-div'>
          <button 
            className='order-button jedi-btn' 
            type='button' 
            onClick={event => handleOrderColor(event)}>
              <img className='order-icon' 
                src={jediBold} 
                alt='Jedi Order Icon' />
          </button>
          <button className='order-button sith-btn' 
            type='button'
            onClick={event => handleOrderColor(event)}>
            <img className='order-icon' 
              src={sithBold} 
              alt='Sith Order Icon' />
          </button>
        </div>
        <h2 className='splash-starwars-h2' 
          id={orderColor} >Rank</h2>
        <select id={orderColor} 
          onChange={event => setRank(event)}>
          <option value={orderRank[0]}>{orderRank[0]}</option>
          <option value={orderRank[1]}>{orderRank[1]}</option>
          <option value={orderRank[2]}>{orderRank[2]}</option>
        </select>
        <input type='text' 
          placeholder='Enter Favorite Quote' 
          name='favQuote'
          onChange={event => handleFormChange(event)}></input>
        {handleJumpToLightSpeedBtn}
      </form>
    </section>
    )
}

export default Splash;