import React, { useState } from "react"

const Nav = ({ setList }) => {
  const [search, setSearch] = useState("")

  const handleText = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const handleSearch = async (e) => {
    setSearch(search)
    setList([{ url: `https://pokeapi.co/api/v2/pokemon/${e.target.value}` }])
  }

  return (
    <div>
      <div>
        <h1>PokeDex</h1>
      </div>
      <div>
        <input type="text" value={search} onChange={handleText} placeholder="Name or Number" />
        <button onClick={handleSearch} type="button" value={search}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Nav
