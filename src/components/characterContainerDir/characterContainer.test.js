import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from './characterContainer'

describe('CharacterContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CharacterContainer />)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})