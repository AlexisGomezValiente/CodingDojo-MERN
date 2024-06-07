import { useState } from "react";
import style from "./FormProduct.module.css";

const FormProduct = (props) => {
  const [form, setForm] = useState({
    title: "",
    price: null,
    description: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const respuesta = await fetch("/api/producto/agregar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (respuesta.ok) {
      alert("Producto agregado");
      const res = await respuesta.json();
      props.addProduct(res);
    } else {
      const resJson = await respuesta.json();
      alert(resJson.message);
    }
  };

  return (
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className={style.form}
      id="form"
    >
      <input
        type="text"
        placeholder="Title"
        id="title"
        className={style.input}
      />
      <input
        type="text"
        placeholder="Price"
        id="price"
        className={style.input}
      />
      <input
        type="text"
        placeholder="Description"
        id="description"
        className={style.input}
      />
      <button type="submit" className={style.btn}>
        Create
      </button>
    </form>
  );
};

export default FormProduct;
