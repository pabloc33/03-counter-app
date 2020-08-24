//import React, { Fragment } from "react";
import React from "react";
import PropTypes from "prop-types";

//FC

const PrimeraApp = ({ saludo, subtitulo }) => {
  //const saludo = "Hola Mundo";

  return (
    <>
      <h1>{saludo}!!!</h1>
      {/*<h1>{JSON.stringify(saludo, null, 3)}</h1>*/}
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
