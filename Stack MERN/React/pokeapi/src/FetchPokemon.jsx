import { useState, useEffect } from "react";

const FetchPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  const pokeApi = () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  };

  return (
    <div>
      <button onClick={pokeApi}>Fecth Pokemon</button>
      <ul>
        {pokemons.length
          ? pokemons.map((poke) => {
              return <li>{poke.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default FetchPokemon;
