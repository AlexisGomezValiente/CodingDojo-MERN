import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Resultados from "./components/Resultados/Resultados";

function App() {
  const [resultados, setResultados] = useState({});

  const buscar = (tipo, id) => {
    const URL = `https://swapi.dev/api/${tipo}/${id}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResultados({ ...data, tipo: tipo });
      });
  };

  return (
    <div className="App">
      <NavBar buscar={buscar} />
      {resultados.tipo == "people" ? (
        <Resultados
          name={resultados.name}
          by={resultados.birth_year}
          height={resultados.height}
          hair={resultados.hair_color}
          world={resultados.homeworld}
        />
      ) : resultados.tipo == "planets" ? (
        <Resultados
          name={resultados.name}
          by={resultados.climate}
          height={resultados.created}
          hair={resultados.diameter}
          world={resultados.population}
        />
      ) : resultados.tipo == "films" ? (
        <Resultados
          name={resultados.title}
          by={resultados.episode_id}
          height={resultados.opening_crawl}
          hair={resultados.director}
          world={resultados.producer}
        />
      ) : resultados.tipo == "species" ? (
        <Resultados
          name={resultados.name}
          by={resultados.classification}
          height={resultados.designation}
          hair={resultados.average_height}
          world={resultados.skin_colors}
        />
      ) : resultados.tipo == "vehicles" ? (
        <Resultados
          name={resultados.name}
          by={resultados.model}
          height={resultados.manufacturer}
          hair={resultados.cost_in_credits}
          world={resultados.length}
        />
      ) : resultados.tipo == "starships" ? (
        <Resultados
          name={resultados.name}
          by={resultados.model}
          height={resultados.manufacturer}
          hair={resultados.cost_in_credits}
          world={resultados.length}
        />
      ) : null}
    </div>
  );
}

export default App;
