import axios from "axios"

const DEFAULT_URL = "https://pokeapi.co/api/v2/"

export const searchByName = async () => {
  try {
    const res = await axios.get(`${DEFAULT_URL}pokemon?limit=151&offset=0`)
    const { data } = res

    const { results } = data
    // console.log(data)
    // console.log(results)

    const pokemonList = results.map((data) => {
      return {
        pokemonName: data.name,
        pokemonUrls: data.url,
      }
    })
    return [pokemonList]
  } catch (error) {
    console.log(error)
  }
}
