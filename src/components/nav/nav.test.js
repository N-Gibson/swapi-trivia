import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav';

describe('Character Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />)

  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})