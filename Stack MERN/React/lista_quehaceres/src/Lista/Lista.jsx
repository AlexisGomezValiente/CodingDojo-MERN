import Tarea from "../Tarea/Tarea";

const Lista = (props) => {
  return (
    <div className="lista">
      {props.listaTareas.length
        ? props.listaTareas.map((tarea, index) => {
            return <Tarea tarea={tarea} id={index} deleteTarea={props.deleteTarea} />;
          })
        : null}
    </div>
  );
};

export default Lista;
