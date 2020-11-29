import React from "react"
import { searchByName } from "api/index"

const Nav = () => {
  return (
    <div>
      <div>
        <h1>PokeDex</h1>
      </div>
      <div>
        <input type="text" placeholder="Name or Number" />
        <button> Search</button>
      </div>
    </div>
  )
}

export default Nav
