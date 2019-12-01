import React, { useState } from "react";

const Formulario = ({ datosConsulta }) => {
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: "",
    pais: ""
  });

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [ e.target.name ]: e.target.value
    });
  };

  const consultarClima = e => {
    e.preventDefault();
    datosConsulta(busqueda);
  };

  return (
    <form onSubmit={ consultarClima }>
      <div className="input-field col s12">
        <input
          id="ciudad"
          name="ciudad"
          onChange={ handleChange }
          type="text"
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select onChange={ handleChange } name="pais">
          <option value="">--Selecciona un País--</option>
          <option value="us">Estados Unidos</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
          <option value="co">Colombia</option>
          <option value="cr">Costa Rica</option>
          <option value="es">España</option>
          <option value="pe">Perú</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          type="submit"
          value="Buscar Clima" />
      </div>
    </form>
  );
};

export default Formulario;
