import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
  let wrapper, mockMovies;

  beforeEach(() => {
    mockMovies = [{
      episode_id: 1,
      image: 'imageUrl',
      release_date: '2019-01-01',
      title: 'Movie Title',
      characters: []
    },
  {
    episode_id: 1,
      image: 'imageUrl',
      release_date: '2019-01-01',
      title: 'Movie Title',
      characters: []
  }]
    wrapper = shallow(<MoviesContainer 
      movies={mockMovies}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
  })
})