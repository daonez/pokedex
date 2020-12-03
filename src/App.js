import React, { useState } from "react"
import Nav from "components/Nav"
import PokemonList from "components/PokemonList"

function App() {
  const [list, setList] = useState([])
  const [search, setSearch] = useState("")
  return (
    <div>
      <Nav search={search} setSearch={setSearch}>
        <PokemonList setList={setList} list={list} />
      </Nav>
      {/* <PokemonList setList={setList} list={list} /> */}
    </div>
  )
}

export default App
