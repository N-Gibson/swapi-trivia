import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from './characterContainer'
import SampleData from '../app/SampleData';

describe('CharacterContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterContainer 
      characters={SampleData[0].characters} 
      favoriteCharacter={jest.fn()} 
      orderColor='blue' 
      name='name' 
      favQuote='favQuote' 
      rank='sith' 
      movieNumber='1' 
      moiveTitle='movietitle'
      scroll='scrolling text'
      />)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })

  it.skip('should update episode number', () => {

    console.log(wrapper.props().children[0].props)
    expect(wrapper.movieNumber).toEqual(1)
    expect(movieNumber).toEqual('I')
  })
})