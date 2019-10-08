export const apiCalls = (swapiFilmsUrl) => {
  fetch(swapiFilmsUrl)
    .then(res => res.json())
    .then(filmData => {
      // console.log(filmData.results)
      filmData.results.map(movie => {
        // console.log(movie)
        const { title, release_date, characters, opening_crawl } = movie;
        // console.log(characters)
        return fetchCharacters(characters)
          // .then(res => console.log(res))
      })
    })

  }

const fetchCharacters = (characters) => {
  characters.map(char => {
    return fetchIndividualChar(char)
  })
}

const fetchIndividualChar = (char) => {
  return fetch(char)
    .then(res => res.json())
    .then(data => console.log(data))
}
