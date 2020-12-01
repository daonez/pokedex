import React, { useState, useEffect } from "react"
import { getPokemonInfo } from "api/index"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PokemonCard = ({ pokemon }) => {
  const [image, setImage] = useState("")
  const [id, setId] = useState(null)
  const [type, setType] = useState([])
  console.log(pokemon)

  useEffect(() => {
    const loadImage = async (url) => {
      const pokemonDetails = await getPokemonInfo(url)
      setImage(pokemonDetails.pokemonImage)
      setId(pokemonDetails.id)
      setType(pokemonDetails.pokemonTypes)
    }
    loadImage(pokemon.url)
  }, [])

  return (
    <PokemonCardContainer>
      <Link to="/:name">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>{pokemon.name}</h1>
          <p>#{id}</p>
          <p>{type[0]}</p>
          <p>{type[1]}</p>
        </div>
      </Link>
    </PokemonCardContainer>
  )
}

export default PokemonCard

const PokemonCardContainer = styled.div`
  display: flex;
`
