import React from 'react';
import { shallow } from 'enzyme';
import Character from './CharacterCard.js';

describe('Character', () => {
  let wrapper, character;
  character = {
    films: ["The Phantom Menace"],
    homeworld: ["Mars", "234567890"],
    id: 2,
    isFavorite: false,
    name: "Qui-Gon Jinn",
    species: "Human"
  }

  beforeEach(() => {
    wrapper = shallow(<Character  key={character.id}
    character={character}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})