import React from 'react';
import { shallow } from 'enzyme';
import FavoritesContainer from './FavoritesContainer';

describe('Favorites Container', () => {
  let wrapper, mockCharacters;

  beforeEach(() => {
    // need to pass props to container
    // mock or actually pass props?
    mockCharacters = {
      props: {
        characters: [{
          films: ["The Phantom Menace"],
          homeworld: ["Mars", "234567890"],
          id: Date.now(),
          isFavorite: false,
          name: "Qui-Gon Jinn",
          species: "Human"
        }, {
          films: ["The Phantom Menace"],
          homeworld: ["Naboo", "4500000000"],
          id: Date.now(),
          isFavorite: false,
          name: "Roos Tarpals",
          species: "Gungan"
        }]
      },
    }
    wrapper = shallow(<FavoritesContainer 
      characters={mockCharacters}/>)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});