import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const input = e.target.id;
    setForm({ ...form, [input]: e.target.value });
  };

  return (
    <div className="padre">
      <form action="" onChange={handleChange} className="form">
        <input type="text" placeholder="Nombre:" id="nombre" />
        <input type="text" placeholder="Apellido:" id="apellido" />
        <input type="text" placeholder="Email:" id="email" />
        <input type="password" placeholder="Password:" id="pass" />
        <input type="password" placeholder="Confirm password:" id="confirmPass" />
      </form>

      <div>
        <h2>Your Data</h2>
        <p>Name: {form.nombre}</p>
        <p>Apellido: {form.apellido}</p>
        <p>Email: {form.email}</p>
        <p>Password: {form.pass}</p>
        <p>Confirm password: {form.confirmPass}</p>
      </div>
    </div>
  );
};

export default Form;
