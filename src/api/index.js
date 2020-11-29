import axios from "axios"

const DEFAULT_URL = "https://pokeapi.co/api/v2/"

export const getPokemonList = async () => {
  try {
    const res = await axios.get(`${DEFAULT_URL}pokemon?limit=151&offset=0`)
    const { data } = res
    console.log(data)
    const { results } = data

    const pokemonList = results.map((data) => {
      return {
        name: data.name,
        url: data.url,
      }
    })
    // const getUrl = results.map((index) => {
    //   return getPokemonInfo(index.url)
    // })
    // console.log(getUrl)
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
    const { abilities, id, types, weight, sprites } = data
    // const { ...pokemonImages } = sprites.other
    console.log(sprites)
    const getpokemonImages = data.map((i) => {
      return i
    })
    console.log(getpokemonImages)
    // const getPokemonImages = Object.values(pokemonImages)
    // console.log(getPokemonImages[1])
    // const images = getPokemonImages[1]
    // console.log(images)
    // // return images
  } catch (error) {
    console.log(error)
  }
}
