const Tarea = (props) => {
    const handleChecked = (e) => {
        if(e.target.checked){
            e.target.parentElement.childNodes[0].classList.add('delete');
        }else{
            e.target.parentElement.childNodes[0].classList.remove('delete');
        }
    }

    const handleClick = () => {
        props.deleteTarea(props.id);
    }

    return(
        <div id={props.id} className="tarea">
            <p>{props.tarea}</p>
            <input type="checkbox" onClick={handleChecked} />
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Tarea;