import axios from "axios"

const DEFAULT_URL = "https://pokeapi.co/api/v2/"

export const getPokemonList = async () => {
  try {
    const res = await axios.get(`${DEFAULT_URL}pokemon?limit=3&offset=0`)
    const { data } = res
    // console.log(data)
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
    // console.log(data)
    const { abilities, id, types, weight, sprites, name } = data
    const image = sprites.other["official-artwork"].front_default

    console.log(types)

    const pokemonTypes = types.map((eachType) => {
      return [eachType.type.name]
    })

    // console.log(pokemonTypes)

    return {
      name,
      image,
      id,
      pokemonTypes,
    }
  } catch (error) {
    console.log(error)
  }
}
