import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./VerProducto.module.css";

const VerProducto = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});

  const URL = "http://localhost:3001/api";

  useEffect(() => {
    fetch(`/api/productos/${params.title}`)
      .then((res) => res.json())
      .then((product) => {
        setProducto(product);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productoActualizado = await fetch(
      `/api/productos/actualizar/${params.title}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      }
    );

    if (productoActualizado.ok) {
      const product = await productoActualizado.json();
      alert(`Se han modificado ${product.modifiedCount} registros`);
      navigate("/");
    } else {
      const product = await productoActualizado.json();
      alert(product.message);
    }
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setProducto({ ...producto, [id]: value });
  };

  const deleteProduct = async (e, title) => {
    e.preventDefault();
    const respuesta = await fetch(`${URL}/productos/eliminar/${title}`, {
      method: "DELETE",
    });
    if (respuesta.ok) {
      alert("Se elimino correctamete");
      navigate("/");
    } else {
      alert("No se ha podido eliminar");
    }
  };

  return (
    <div className={style.container}>
      <form
        className={style.form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <input type="text" id="title" value={producto.title} />
        <input type="text" id="price" value={producto.price} />
        <input type="text" id="description" value={producto.description} />
        <button className={style.btn}>Actualizar</button>
        <button
          className={style.delete}
          onClick={(e) => {
            deleteProduct(e, params.title);
          }}
        >
          Eliminar Producto
        </button>
      </form>
    </div>
  );
};

export default VerProducto;
