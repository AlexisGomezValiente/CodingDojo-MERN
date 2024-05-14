import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const verificar = (form) => {
    const errors = {};

    if(form.nombre.length < 3) errors.nombre = 'Debe tener mas de 3 caracteres';
    else errors.nombre = 'Correcto';
    if(form.apellido.length < 3) errors.apellido = 'Debe tener mas de 3 caracteres';
    else errors.apellido = 'Correcto';
    if(form.email.length < 5) errors.email = 'Debe tener mas de 5 caracteres';
    else errors.email = 'Correcto';
    if(form.pass.length < 8) errors.pass = 'Debe tener mas de 8 caracteres';
    else errors.pass = 'Correcto';
    if(!form.confirmPass.length) errors.confirmPass = '';
    else if(form.confirmPass != form.pass) errors.confirmPass = 'No coincide';
    else errors.confirmPass = 'Correcto';
    
    return errors;
  };

  const handleChange = (e) => {
    const input = e.target.id;
    setForm({ ...form, [input]: e.target.value });
    setErrors(verificar({ ...form, [input]: e.target.value }));
  };

  return (
    <div className="padre">
      <form action="" onChange={handleChange} className="form">
        <input type="text" placeholder="Nombre:" id="nombre" />
        <p id="errnombre">{errors.nombre}</p>
        <input type="text" placeholder="Apellido:" id="apellido" />
        <p id="errapellido">{errors.apellido}</p>
        <input type="text" placeholder="Email:" id="email" />
        <p id="erremail">{errors.email}</p>
        <input type="password" placeholder="Password:" id="pass" />
        <p id="errpass">{errors.pass}</p>
        <input
          type="password"
          placeholder="Confirm password:"
          id="confirmPass"
        />
        <p id="errconfirmPass">{errors.confirmPass}</p>
      </form>

      <div className="data">
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
