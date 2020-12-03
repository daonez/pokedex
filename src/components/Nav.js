import React, { useState } from "react";
import { searchPokemon } from "api/index";


const Nav = () => {
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    const pokemonName = await searchPokemon(e.target.value);
    setSearch(search);
    // console.log(pokemonName);
  };

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
  );
};

export default Nav;
