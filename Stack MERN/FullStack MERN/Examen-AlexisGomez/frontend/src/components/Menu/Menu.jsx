import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Menu = (props) => {
  const navigate = useNavigate();
  const [estados, setEstados] = useState({
    NUEVO: [],
    PROGRESO: [],
    COMPLETO: [],
  });

  const pedir = async (estado) => {
    try {
      const res = await fetch(`${props.URL}/api/proyecto/estado/${estado}`);
      const proyectos = await res.json();
      setEstados((prevEstados) => ({
        ...prevEstados,
        [estado]: proyectos,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cambiarEstado = async (nombre) => {
    try {
      await fetch(`${props.URL}/api/proyecto/actualizar`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }),
      });
      await pedirTodosEstados();
      await props.todosProyectos();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const eliminarProyecto = async (nombre) => {
    await fetch(`${props.URL}/api/proyecto/eliminar/${nombre}`, {
      method: "DELETE",
    });
    await pedirTodosEstados();
    await props.todosProyectos();
    alert("Proyecto eliminado con exito");
  };

  const pedirTodosEstados = async () => {
    await pedir("NUEVO");
    await pedir("PROGRESO");
    await pedir("COMPLETO");
  };

  useEffect(() => {
    pedirTodosEstados();
  }, []);

  useEffect(() => {
    if (!props.login) navigate("/");
  }, [props.login]);

  return (
    <div>
      <h2>Project Manager</h2>
      <button
        onClick={() => {
          props.cerrarSesion();
        }}
      >
        Cerrar Sesión
      </button>
      <div>
        <Table
          titulo={"NUEVOS"}
          proyectos={estados.NUEVO}
          cambiarEstado={cambiarEstado}
        />
        <Table
          titulo={"PROGRESO"}
          proyectos={estados.PROGRESO}
          cambiarEstado={cambiarEstado}
        />
        <Table
          titulo={"COMPLETO"}
          proyectos={estados.COMPLETO}
          cambiarEstado={cambiarEstado}
          eliminarProyecto={eliminarProyecto}
        />
      </div>

      <Link to={"/nuevoproyecto"}>
        <p>Agregar nuevo proyecto</p>
      </Link>
    </div>
  );
};

export default Menu;
