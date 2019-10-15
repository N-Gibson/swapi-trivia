import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MoviesContainer />)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})