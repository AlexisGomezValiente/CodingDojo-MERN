import { useState } from "react";
import style from './FormProduct.module.css';

const FormProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/producto/agregar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Producto agregado con exito");
      });
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className={style.form}>
      <input type="text" placeholder="Title" id="title" className={style.input} />
      <input type="text" placeholder="Price" id="price" className={style.input} />
      <input type="text" placeholder="Description" id="description" className={style.input} />
      <button type="submit" className={style.btn}>Create</button>
    </form>
  );
};

export default FormProduct;
