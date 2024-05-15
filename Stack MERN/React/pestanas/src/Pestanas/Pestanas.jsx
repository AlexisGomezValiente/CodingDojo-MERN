import { useState } from "react";
import Pestana from "../Pestana/Pestana";

const Pestanas = () => {
  const [actual, setActual] = useState("");

  const [contenido, setContenido] = useState([
    {
      title: "Tab 1",
      contenido: "Esto es el Tab 1",
    },
    {
      title: "Tab 2",
      contenido: "Esto es el Tab 2",
    },
    {
      title: "Tab 3",
      contenido: "Esto es el Tab 3",
    },
  ]);

  const handleClick = (e) => {
    setActual(contenido[e.target.id].contenido);
  };

  return (
    <div className="padre">
      <div className="titles">
        {contenido.map((pestana, index) => {
          return (
            <Pestana
              title={pestana.title}
              id={index}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div className="contenido">
        <p>{actual}</p>
      </div>
    </div>
  );
};

export default Pestanas;
