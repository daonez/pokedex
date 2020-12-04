import React, { useState } from "react"
import Nav from "components/Nav"
import PokemonList from "components/PokemonList"

function App() {
  const [list, setList] = useState([])
  return (
    <div>
      <Nav setList={setList}></Nav>
      <PokemonList setList={setList} list={list} />
    </div>
  )
}

export default App
