import React, { useState } from "react";
import ReactDOM from "react-dom";

const Cantidad = ({ counter }) => {
  return (
    <>
      <h2>{counter}</h2>
    </>
  );
};

const Button = ({ handelclick, text }) => {
  return (
    <>
      <button onClick={handelclick}>{text}</button>
    </>
  );
};

const App = () => {
  const [contador, setCounter] = useState(0);

  const incrementador = () => setCounter(contador + 1);
  const resetear = () => setCounter(0);
  const quitar = () => setCounter(contador - 1);

  return (
    <>
      <Cantidad counter={contador} />
      <Button handelclick={incrementador} text="aumentar" />
      <Button handelclick={resetear} text="resetear" />
      <Button handelclick={quitar} text="decrementar" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
