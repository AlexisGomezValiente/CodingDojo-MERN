import { useState } from "react";

const Form = (props) => {
  const [tarea, setTarea] = useState("");

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const submit = (e) => {
    props.handleSubmit(e, tarea);
  };

  return (
    <form className="form" onChange={handleChange} onSubmit={submit}>
      <input type="text" placeholder="Tarea: " />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
