import React from "react"

import { searchPokemon } from "api"

const Nav = ({ search, setSearch }) => {
  const handleText = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleSearch = async (e) => {
    try {
      console.log(e.target.value)
      const pokemonName = await searchPokemon(e.target.value)
      setSearch(pokemonName)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div>
        <h1>PokeDex</h1>
      </div>
      <div>
        <input type="text" placeholder="Name or Number" onChange={handleText} value={search} />
        <button type="button" value={search} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Nav
