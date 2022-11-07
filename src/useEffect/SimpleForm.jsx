import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "carmelo",
    email: "carmelo@gmail.com",
  });

  const { username, email } = formState;

  /**
   * When the input changes, update the state of the form with the new value of the input.
   */
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState, // maintain state of other form fields
      [name]: value, // update state of field that is changed
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "carmelo" ? <Message /> : null}
    </>
  );
};
