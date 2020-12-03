import React, { useState, useEffect } from "react"
import { getPokemonInfo } from "api/index"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PokemonCard = ({ pokemon }) => {
  const [image, setImage] = useState("")
  const [id, setId] = useState(null)
  const [type, setType] = useState([])
  const [name, setName] = useState("")
  // console.log(pokemon)

  useEffect(() => {
    const loadDetails = async (url) => {
      const details = await getPokemonInfo(url)
      setImage(details.image)
      setId(details.id)
      setType(details.pokemonTypes)
      setName(details.name)
    }
    loadDetails(pokemon.url)
  }, [pokemon])

  return (
    <PokemonCardContainer>
      <Link to="/:name">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>{name}</h1>
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
