import React, { useEffect } from "react"
import { getPokemonList, getPokemonInfo } from "api/index"

const PokemonList = ({ list, setList, pokemonImage, setPokemonImage }) => {
  useEffect(() => {
    const firstInit = async () => {
      try {
        const list = await getPokemonList()
        console.log(list)
        const images = await getPokemonInfo()
        setList(list)
        setPokemonImage(pokemonImage)
      } catch (error) {
        console.log(error)
      }
    }

    firstInit()
  }, [])

  const handleClick = () => {
    list.map((index) => {
      return getPokemonInfo(index.url)
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Hello</button>
      <ul>
        {list.map((img, id) => {
          return (
            <li key={id}>
              <span>{img.id}</span>
              <p>{img.name}</p>
              <div>
                {pokemonImage.map((img, id) => {
                  return <img src={img} alt="" />
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PokemonList
