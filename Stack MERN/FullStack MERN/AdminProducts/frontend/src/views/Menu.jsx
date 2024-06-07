import FormProduct from "../components/FormProduct/FormProduct";
import Productos from "../components/Productos/Productos";
import { useState, useEffect } from "react";
import style from './Menu.module.css';

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const URL = "http://localhost:3001/api";

  const pedirProductos = () => {
    fetch(`${URL}/productos`)
      .then((res) => res.json())
      .then((res) => {
        setProductos(res);
      });
  };

  const addProduct = (producto) => {
    setProductos([...productos, producto]);
  };

  useEffect(() => {
    pedirProductos();
  }, []);

  return (
    <div className={style.container}>
      <FormProduct addProduct={addProduct} />
      <Productos productos={productos} />
    </div>
  );
};

export default Menu;
