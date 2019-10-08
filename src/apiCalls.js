export const apiCalls = (swapiFilmsUrl) => {
  return fetch(swapiFilmsUrl)
    .then(res => res.json())
    .then(filmData => {
      console.log(filmData)
      const filmInfo = filmData.results.map(movie => {
        const { title, release_date, characters, opening_crawl } = movie;
        return Promise.all(fetchCharacters(characters, title, release_date, opening_crawl))
      })
      return Promise.all(filmInfo)
    })

  }

const fetchCharacters = (characters, title, release_date, opening_crawl) => {
  return characters.map(char => fetch(char)
  .then(res => res.json())
  .then(data => {
    return (
        {
        films: data.films,
        homeworld: data.homeworld,
        name: data.name,
        species: data.species,
        title: title,
        release_date: release_date,
        opening_crawl: opening_crawl
        }
    )
  }))
  // .catch(error => console.log('fetchCharacters error: ', error)))
}



// const fetchIndividualChar = (char) => {
//   return fetch(char)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('fetchIndividualChar error: ', error))
// }
