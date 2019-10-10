export const apiCalls = (swapiFilmsUrl) => {
  return fetch(swapiFilmsUrl)
    .then(res => res.json())
    .then(films => {
      const { results } = films;
      const filmData = results.map(movie => {
        const { characters, episode_id, opening_crawl, release_date, title } = movie;
        return getCharacters(characters)
          .then(characters => ({characters, episode_id, opening_crawl, release_date, title}))
      })
      return Promise.all(filmData)
    })
  }

const getCharacters = (characters) => {
  const charactersData = characters.map(char => {
    return fetch(char)
    .then(res => res.json())
    .then(char => {
      const { films, homeworld, name, species } = char;
      return getFilms(films)
        .then(films => ({films, homeworld, name, species}))
    })
    .then(char => {
      const { films, homeworld, name, species } = char;
      return getHomeworld(homeworld)
        .then(homeworld => ({films, homeworld, name, species}))
    })
    .then(char => {
      const {films, homeworld, name, species } = char
      return getSpecies(species)
        .then(species => ({films, homeworld, name, species}))
    })
  })
  return Promise.all(charactersData)
}

const getFilms = (films) => {
  const filmData = films.map(film => {
    return fetch(film)
      .then(res => res.json())
      .then(film => film.title)
  })
  return Promise.all(filmData)
}

const getHomeworld = (homeworld) => {
  return fetch(homeworld)
    .then(res => res.json())
    .then(homeworld => {
      const { name, population } = homeworld
      return [name, population]
    })
}

const getSpecies = (species) => {
    return fetch(species)
      .then(res => res.json())
      .then(specie => {
        const { name } = specie;
        return name
      })
      .catch(err => console.log(err))
}
