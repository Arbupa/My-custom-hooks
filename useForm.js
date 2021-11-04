import { useState } from "react";

// custom hook para manejar los formularios
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  // se encarga de hacer target al input que haga match con el nombre
  // y así devolver el valor actual del input ingresado
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
