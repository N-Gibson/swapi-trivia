import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './movieCard';

describe('Character Container', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MovieCard />)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})