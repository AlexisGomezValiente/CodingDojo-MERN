import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link className={`${style.link} ${style.title}`}>
        <p>Product Manager</p>
      </Link>
      <Link to={'/'} className={style.link}>
        <p>Inicio</p>
      </Link>
    </div>
  );
};

export default NavBar;
