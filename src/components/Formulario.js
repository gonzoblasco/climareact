import React from "react";

const Formulario = props => {
  const handleChange = e => {

  };

  return (
    <form>
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
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
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
