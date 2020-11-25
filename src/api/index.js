import axios from "axios"

const DEFAULT_URL = "https://pokeapi.co/api/v2/"
// console.log(DEFAULT_URL)
// const POKEMONE_TYPE = "https://pokeapi.co/api/v2/type/"
// console.log(POKEMONE_TYPE)

// export const searchByName = async (search) => {
//   try {
//     const res = await axios.get(`${DEFAULT_URL}?${search}`)
//     const { data } = res

//     const { results } = data
//     // console.log(data)
//     // console.log(results)

//     const pokemonList = results.map((data) => {
//       return {
//         pokemonName: data.name,
//         pokemonUrls: data.url,
//       }
//     })
//     return [pokemonList]
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getPokemonList = async () => {
  try {
    const res = await axios.get(`${DEFAULT_URL}pokemon?limit=151&offset=0`)
    const { data } = res

    const { results } = data

    const pokemonList = results.map((data) => {
      return {
        name: data.name,
        url: data.url,
      }
    })

    return pokemonList
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonInfo = async (url) => {
  try {
    // console.log(url)
    const res = await axios.get(url)
    const { data } = res
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
