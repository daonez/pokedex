import React, { useState } from "react"
import Nav from "components/Nav"
import PokemonList from "components/PokemonList"

function App() {
  const [images, setImages] = useState([])
  return (
    <div>
      <Nav />
      <PokemonList setImages={setImages} images={images} />
    </div>
  )
}

export default App
