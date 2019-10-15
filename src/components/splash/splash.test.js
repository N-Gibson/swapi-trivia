import React from 'react';
import { shallow } from 'enzyme';
import Splash from './splash';

describe('Splash', () => {
  let wrapper;
  beforeEach(() => {
    let mockOrderRank = ['novice', 'intermediate', 'expert']
    wrapper = shallow(<Splash 
    orderRank={mockOrderRank}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})