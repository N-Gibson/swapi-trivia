import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SampleData from './SampleData';
// jest.mock('./App');

describe('App', () => {
  let wrapper, movies;

  beforeEach(() => {
    wrapper = shallow(<App />)
      movies = [{
        episode_id: 1,
        image: "https://vignette.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest?cb=20130822171446",
        release_date: "1999-05-19",
        title: "The Phantom Menace",
        trailer: 'https://www.youtube.com/watch?v=bD7bpG-zDJQ',
        opening_crawl: "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star  systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
        characters: [{
          films: ["The Phantom Menace"],
          homeworld: ["Mars", "234567890"],
          id: Date.now(),
          isFavorite: false,
          name: "Qui-Gon Jinn",
          species: "Human"
        }]
      }]
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to change order color', () => {
    //setup
    const mockEvent = {
      target: {
        parentNode: {
          className: 'jedi-btn'
        }
      }
    }
    const expectedOrderColor = 'jediColor';
    const expectedOrderRank =  ['Padawan', 'Jedi Master', 'Grand Master of the Jedi'];
    const expectedRank = 'Padawan';
    //execution
    wrapper.instance().handleOrderColor(mockEvent);
    //expectation
    expect(wrapper.state('orderColor')).toEqual(expectedOrderColor);
    expect(wrapper.state('orderRank')).toEqual(expectedOrderRank);
    expect(wrapper.state('rank')).toEqual(expectedRank);
  });

  it('should handle form change', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'value'
      }
    }
    wrapper.instance().handleFormChange(mockEvent)
    expect(wrapper.state('name')).toEqual('value')
  });

  it('should set rank', () => {
    const mockEvent = {
      target: {
        value: 'value'
      }
    }
    wrapper.instance().setRank(mockEvent)
    expect(wrapper.state('rank')).toEqual('value')
  });

  it.skip('should be able to favorite a new character', () => {
    //setup
    const mockEvent = {
      target: {
        parentNode: {
          children: [{
            innerText: 'Qui-Gon Jinn'
          }]
        }
      }
    }
    wrapper.instance().favoriteNewCharacter(mockEvent)
    //expectation
    expect(wrapper.instance().favoriteNewCharacter).toHaveBeenCalled()
  })

  it.skip('should check that apiCalls is fired', () => {
    //setup
    // const mockUrl = 'url'
    // const mockApiCalls = jest.fn(mockUrl)
    //execution
    wrapper.instance().componentDidMount()
    //expectation
    expect(wrapper.instance().componentDidMount).toHaveBeenCalled()
  });
})