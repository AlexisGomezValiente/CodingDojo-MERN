import style from "./Table.module.css";

const Table = (props) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th style={{ backgroundColor: props.titleColor }}>{props.titulo}</th>
        </tr>
      </thead>

      <tbody>
        {props.proyectos.map((proyect) => {
          return (
            <tr key={proyect._id}>
              <td>
                <div className={style.proyecto} style={{ backgroundColor: `rgb(${props.fondoProyecto})` }}>
                  <h2>{proyect.nombre}</h2>
                  <p>{proyect.fecha}</p>
                  <button
                    style={{ backgroundColor: props.colorButon }}
                    onClick={() => {
                      if (proyect.estado != "COMPLETO") {
                        props.cambiarEstado(proyect.nombre);
                      } else {
                        props.eliminarProyecto(proyect.nombre);
                      }
                    }}
                  >
                    {proyect.estado == "NUEVO"
                      ? "MOVER A PROGRESO"
                      : proyect.estado == "PROGRESO"
                      ? "MOVER A COMPLETO"
                      : "ELIMINAR"}
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
