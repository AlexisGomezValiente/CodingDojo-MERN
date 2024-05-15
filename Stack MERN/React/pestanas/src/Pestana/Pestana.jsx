const Pestana = (props) => {
    return(
        <>
            <h2 onClick={props.handleClick} id={props.id}>{props.title}</h2>
        </>
    )
}

export default Pestana;