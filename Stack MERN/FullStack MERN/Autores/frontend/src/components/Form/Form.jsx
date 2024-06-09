import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    if (params.nombre) props.setForm({ ...params });
    if (location.pathname.includes("agregar")) props.setForm({ nombre: "" });
  }, [location]);

  useEffect(() => {
    return () => {
      props.setForm({ nombre: "" });
    };
  },[]);

  return (
    <form
      onChange={props.handleChangeFormNew}
      onSubmit={
        params.nombre
          ? (e) => {
              props.handleSubmitFormNew(e, params.nombre);
            }
          : props.handleSubmitFormNew
      }
      className={style.form}
    >
      <input
        id="nombre"
        type="text"
        placeholder="Nombre"
        defaultValue={props.nombre}
        onChange={props.handleChangeFormNew}
      />
      <button className={style.enviar}>Enviar</button>
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
        className={style.cancel}
      >
        Cancelar
      </button>
    </form>
  );
};

export default Form;
