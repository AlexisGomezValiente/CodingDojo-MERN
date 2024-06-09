import { Link } from "react-router-dom";
import style from "./Table.module.css";

const Table = (props) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {props.autores.map((autor) => {
          return (
            <tr key={autor.nombre}>
              <td>{autor.nombre}</td>
              <td>
                <div className={style.accion}>
                  <Link to={`/editar/${autor.nombre}`}>
                    <button className={style.editar}>Editar</button>
                  </Link>
                  <button
                    onClick={() => {
                      props.deleteAutor(autor.nombre);
                    }}
                    className={style.borrar}
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
