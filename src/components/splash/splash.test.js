import React from 'react';
import { shallow } from 'enzyme';
import Splash from './splash';

describe('Splash', () => {
  let wrapper;
  beforeEach(() => {
    const handleFormChangeMock = jest.fn()
    let mockOrderRank = ['novice', 'intermediate', 'expert']
    wrapper = shallow(<Splash 
    orderRank={mockOrderRank} 
    handleFormChange={handleFormChangeMock}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })

  it.skip('should call hangelFormChange', () => {
    wrapper.find('input').at(0).simulate('change')
    expect(handleFormChangeMock).toHaveBeenCalled()
  })

})