import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './movieCard';

describe('Character Container', () => {
  let wrapper, mockReleaseDate;

  beforeEach(() => {
    mockReleaseDate = '2019-10-10'
    wrapper = shallow(<MovieCard 
      releaseDate={mockReleaseDate}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})