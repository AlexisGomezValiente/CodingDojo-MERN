import style from './Resultados.module.css';

const Resultados = (props) => {
    return(
        <div>
            <h2>Resultado</h2>
            <h2>{props.name}</h2>
            <p>{props.height}</p>
            <p>{props.hair}</p>
            <p>{props.by}</p>
            <p>{props.world}</p>
        </div>
    )
}

export default Resultados;