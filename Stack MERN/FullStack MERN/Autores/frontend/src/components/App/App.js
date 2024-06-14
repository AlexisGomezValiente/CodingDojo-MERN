import "./App.css";
import NavBar from "../NavBar/NavBar";
import Table from "../Table/Table";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [autores, setAutores] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  const pedirAutores = async () => {
    const respuesta = await fetch(`${URL}/autores`);

    if (respuesta.ok) {
      const resJson = await respuesta.json();
      setAutores(resJson);
    }
  };

  useEffect(() => {
    pedirAutores();
  }, []);

  const [form, setForm] = useState({
    nombre: "",
  });

  const handleChangeFormNew = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setForm({ ...form, [id]: value });
  };

  const handleSubmitFormNew = async (e) => {
    e.preventDefault();

    const respuesta = await fetch(`${URL}/autor/agregar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (respuesta.ok) {
      alert("Se ha agregado exitosamente");
      pedirAutores();
      navigate("/");
    } else if (respuesta.status != 500) {
      const resJson = await respuesta.json();
      alert(resJson.message);
    } else {
      const resJson = await respuesta.json();
      alert(resJson.message || resJson.errorResponse.errmsg);
    }
  };

  const handleSubmitUpdate = async (e, nombreActual) => {
    e.preventDefault();

    const respuesta = await fetch(`${URL}/autor/actualizar/${nombreActual}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombreNew: form.nombre }),
    });

    if (respuesta.ok) {
      alert("Se ha actualizado exitosamente");
      await pedirAutores();
      navigate("/");
    } else if (respuesta.status != 500) {
      const resJson = await respuesta.json();
      alert(resJson.message);
    } else {
      const resJson = await respuesta.json();
      alert(resJson.message || resJson.errorResponse.errmsg);
    }
  };

  const deleteAutor = async (nombre) => {
    await fetch(`${URL}/autor/eliminar/${nombre}`, { method: "DELETE" });
    pedirAutores();
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Table deleteAutor={deleteAutor} autores={autores} />}
        />
        <Route
          path="/agregar"
          element={
            <Form
              nombre={form.nombre}
              setForm={setForm}
              handleChangeFormNew={handleChangeFormNew}
              handleSubmitFormNew={handleSubmitFormNew}
            />
          }
        />
        <Route
          path="/editar/:nombre"
          element={
            <Form
              nombre={form.nombre}
              handleChangeFormNew={handleChangeFormNew}
              handleSubmitFormNew={handleSubmitUpdate}
              setForm={setForm}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
