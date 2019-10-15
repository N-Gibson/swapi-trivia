import React from 'react';
import { shallow } from 'enzyme';
import Splash from './splash';

describe('Splash', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Splash />)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})