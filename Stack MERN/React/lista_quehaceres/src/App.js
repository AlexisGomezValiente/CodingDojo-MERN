import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./Form/Form";
import Lista from "./Lista/Lista";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e, tarea) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
  };

  const deleteTarea = (index) => {
    const listaNueva = listaTareas.filter((tarea, indice) => indice != index);
    setListaTareas(listaNueva);
  }

  return <div className="App">
    <Form handleSubmit={handleSubmit} />
    <Lista listaTareas={listaTareas} deleteTarea={deleteTarea} />
  </div>;
}

export default App;
