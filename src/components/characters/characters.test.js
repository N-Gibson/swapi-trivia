import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CharacterCard />)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})