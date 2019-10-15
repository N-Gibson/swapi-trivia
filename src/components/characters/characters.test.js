import React from 'react';
import { shallow } from 'enzyme';
import Character from './CharacterCard.js';

describe('Character', () => {

  beforeEach(() => {
    let wrapper = shallow(<Character />)
  })

  it('should match snapshot', () => {
    console.log(wrapper)
  })

  // it('should match snapshot', () => {
  //   console.log(wrapper)
  //   expect(wrapper).toMatchSnapshot();
  // })
})