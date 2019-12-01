import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
  const [ ciudad, guardarCiudad ] = useState("");
  const [ pais, guardarPais ] = useState("");
  const [ error, guardarError ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});

  useEffect(() => {
    if ( ciudad === "" ) return;

    const consultarAPI = async () => {
      const appId = "06586291b796699f97ede861e94ca0a8";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${ appId }`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
    };

    consultarAPI();
  }, [ ciudad, pais ]);

  const datosConsulta = datos => {
    if ( datos.ciudad === "" || datos.pais === "" ) {
      guardarError(true);
      return;
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  };

  let componente;
  if ( error ) {
    componente = <Error mensaje="Ambos campos son obligatorios" />;
  } else if ( resultado.cod === "404" ) {
    componente = <Error mensaje="La Ciudad no existe en Nuestro Registro" />;
  } else {
    componente = <Clima resultado={ resultado } />;
  }

  return (
    <div className="App">
      <Header titulo={ "Clima React App" } />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={ datosConsulta } />
            </div>
            <div className="col s12 m6">
              { componente }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
