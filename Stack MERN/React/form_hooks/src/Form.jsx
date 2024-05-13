import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const verificar = (form, event) => {
    const input = {
        nombre: event.target.id
    };

    if(input.nombre == 'nombre') input.length = 3;
    if(input.nombre == 'apellido') input.length = 3;
    if(input.nombre == 'email') input.length = 5;
    if(input.nombre == 'pass') input.length = 8;
    if(input.nombre == 'confirmPass') input.length = 8;

    const inputs = [];
    for(let key in form){
        inputs.push(key);
    }

    if(!(inputs.includes(input.nombre) && form[input.nombre].length < input.length)){
        if(input.nombre == 'confirmPass'){

        }else{
            const err = document.getElementById(`err${input.nombre}`);
        err.classList.add('formErr');
        }
    }else{
        const err = document.getElementById(`err${input.nombre}`);
        err.classList.remove('formErr');
    }
  }

  const handleChange = (e) => {
    const input = e.target.id;
    setForm({ ...form, [input]: e.target.value });
    verificar({ ...form, [input]: e.target.value }, e)
  };

  return (
    <div className="padre">
      <form action="" onChange={handleChange} className="form">
        <input type="text" placeholder="Nombre:" id="nombre" />
        <p id="errnombre">* Debe tener mas de 2 caracteres</p>
        <input type="text" placeholder="Apellido:" id="apellido" />
        <p id="errapellido">* Debe tener mas de 2 caracteres</p>
        <input type="text" placeholder="Email:" id="email" />
        <p id="erremail">* Debe tener mas de 5 caracteres</p>
        <input type="password" placeholder="Password:" id="pass" />
        <p id="errpass">* Debe tener al menos 8 caracteres</p>
        <input type="password" placeholder="Confirm password:" id="confirmPass" />
        <p id="errconfirmPass">* No coincide</p>
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
