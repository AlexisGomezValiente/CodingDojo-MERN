const Tarea = (props) => {
  const handleChecked = (e) => {
    props.marcar(props.id, e.target.checked);
  };

  const handleClick = () => {
    props.deleteTarea(props.id);
  };

  return (
    <div id={props.id} className="tarea">
      <p className={!props.estado ? 'delete' : ''}>{props.tarea}</p>
      <input type="checkbox" onClick={handleChecked} />
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Tarea;
