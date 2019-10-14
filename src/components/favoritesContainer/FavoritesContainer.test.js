import React from 'react';
import { shallow } from 'enzyme';
import FavoritesContainer from './FavoritesContainer';

describe('Favorites Container', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<FavoritesContainer />)
  })
});