import React, { useEffect } from "react"
import { getPokemonList, getPokemonInfo } from "api/index"

const PokemonList = ({ setImages, images }) => {
  useEffect(() => {
    const firstInit = async () => {
      try {
        const imageResults = await getPokemonList()
        console.log(imageResults)
        setImages(imageResults)
      } catch (error) {
        console.log(error)
      }
    }

    firstInit()
  }, [])

  const handleClick = () => {
    images.map((index) => {
      return getPokemonInfo(index.url)
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Hello</button>
      <ul>
        {images.map((img, id) => {
          return (
            <li key={id}>
              <span>{img.id}</span>
              <p>{img.name}</p>
              <img src={img} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PokemonList
