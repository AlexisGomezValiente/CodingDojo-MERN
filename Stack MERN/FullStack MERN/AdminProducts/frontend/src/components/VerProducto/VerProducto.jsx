import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VerProducto = () => {
  const params = useParams();
  console.log(params)
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`/api/productos/${params.title}`)
      .then((res) => res.json())
      .then((product) => {
        setProducto(product)
      });
  }, []);

  return (
    <div>
      <h2>Title: {producto.title}</h2>
      <h2>Price: {producto.price} US.</h2>
      <h2>Description: {producto.description}</h2>
    </div>
  );
};

export default VerProducto;
