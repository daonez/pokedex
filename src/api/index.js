import axios from "axios"

const DEFAULT_URL = "https://pokeapi.co/api/v2/"
const POKEMON_NAME = "https://pokeapi.co/api/v2/pokemon/"
export const getPokemonList = async () => {
  try {
    const res = await axios.get(`${DEFAULT_URL}pokemon?limit=8&offset=0`)
    const { data } = res
    console.log(data)
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

export const searchPokemon = async (query) => {
  try {
    const res = await axios.get(`${POKEMON_NAME}${query}`)
    const { data } = res
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonInfo = async (url) => {
  try {
    // console.log(url)
    const res = await axios.get(url)
    const { data } = res

    const { abilities, id, types, weight, sprites } = data
    const pokemonImage = sprites.other["official-artwork"].front_default

    console.log(types)

    const pokemonTypes = types.map((pokemontype) => {
      return [pokemontype.type.name]
    })

    console.log(pokemonTypes)

    return {
      pokemonImage,
      id,
      pokemonTypes,
    }
  } catch (error) {
    console.log(error)
  }
}
