import React, { useState } from "react"
import Nav from "components/Nav"
import PokemonList from "components/PokemonList"

function App() {
  const [list, setList] = useState([])
  const [pokemonImage, setPokemonImage] = useState([])
  return (
    <div>
      <Nav />
      <PokemonList
        setList={setList}
        list={list}
        pokemonImage={pokemonImage}
        setPokemonImage={setPokemonImage}
      />
    </div>
  )
}

export default App
