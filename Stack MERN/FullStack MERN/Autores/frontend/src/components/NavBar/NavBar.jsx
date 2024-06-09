import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to={"/"} className={style.link}>
        <p>Inicio</p>
      </Link>
      <Link to={"/agregar"} className={style.link}>
        <p>Agregar</p>
      </Link>
    </div>
  );
};

export default NavBar;
