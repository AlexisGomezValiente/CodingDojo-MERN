import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Caja from "./Caja/Caja";

function App() {
  const [caja, setCaja] = useState({
    color: "",
    anchoAlto: "",
  });

  const [cajas, setCajas] = useState([]);

  const handleChange = (e) => {
    const input = e.target.id;
    setCaja({ ...caja, [input]: `${e.target.value}` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCajas([...cajas, caja]);
  };

  return (
    <div className="App">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input type="text" placeholder="Color de caja: " id="color" />
        <input
          type="text"
          placeholder="Tamano para ancho y alto: "
          id="anchoAlto"
        />
        <button type="submit">Agregar</button>
      </form>
      <div className="padre">
        {cajas.map((caja) => {
          return <Caja color={caja.color} anchoAlto={caja.anchoAlto} />;
        })}
      </div>
    </div>
  );
}

export default App;
