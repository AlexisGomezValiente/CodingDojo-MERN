import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Productos.module.css";

const Productos = ({productos}) => {
  return (
    <div className={style.container}>
      {productos.length
        ? productos.map((producto) => {
            return (
              <Link to={`/${producto.title}`} className={style.link}>
                <p className={style.p}>{producto.title}</p>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Productos;
