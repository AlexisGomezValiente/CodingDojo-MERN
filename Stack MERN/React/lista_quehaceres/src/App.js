import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./Form/Form";
import Lista from "./Lista/Lista";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e, tarea) => {
    e.preventDefault();
    setListaTareas([...listaTareas, { tarea: tarea, estado: true }]);
  };

  const deleteTarea = (index) => {
    const listaNueva = listaTareas.filter((tarea, indice) => indice != index);
    setListaTareas(listaNueva);
  };

  const marcar = (index, condition) => {
    const listaNueva = listaTareas.map((tarea, i) => {
      if (i == index && condition) {
        tarea.estado = false;
      }

      if (i == index && !condition) {
        tarea.estado = true;
      }

      return tarea;
    });
    console.log(listaNueva);
    setListaTareas(listaNueva);
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <Lista
        listaTareas={listaTareas}
        deleteTarea={deleteTarea}
        marcar={marcar}
      />
    </div>
  );
}

export default App;
