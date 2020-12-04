import React, { useEffect } from "react"
import { getPokemonList } from "api/index"
import PokemonCard from "components/PokemonCard"
import styled from "styled-components"

const PokemonList = ({ list, setList }) => {
  useEffect(() => {
    const firstInit = async () => {
      try {
        const list = await getPokemonList()
        // console.log(list)
        setList(list)
      } catch (error) {
        console.log(error)
      }
    }

    firstInit()
  }, [])

  return (
    <PokemonListContainer>
      <ul>
        {list.map((pokemon, id) => (
          <PokemonCard key={id} pokemon={pokemon} />
        ))}
      </ul>
    </PokemonListContainer>
  )
}

export default PokemonList

const PokemonListContainer = styled.div`
  display: flex;
`
