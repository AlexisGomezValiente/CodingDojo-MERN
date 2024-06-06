import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then((res) => {
        setProductos(res);
      });
  };

  useEffect(() => {
    pedirProductos();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {productos.length
        ? productos.map((producto) => {
            return (
              <Link to={`/${producto.title}`}>
                <p>{producto.title}</p>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Productos;
