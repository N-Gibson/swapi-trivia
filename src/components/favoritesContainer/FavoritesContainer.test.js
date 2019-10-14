import React from 'react';
import { shallow } from 'enzyme';
import FavoritesContainer from './FavoritesContainer';

describe('Favorites Container', () => {
  let wrapper
  beforeEach(() => {
    // need to pass props to container
    // mock or actually pass props?
    wrapper = shallow(<FavoritesContainer />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});