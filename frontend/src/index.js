import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Team from './Team';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu';

// Funciones y Clases
function TheWelcome (props) {
  return <h1>Hello, {props.name}</h1>;  
}

//Variable
const nombres = 'Fran'
//Componente a través de variable
const WelcomeComponent = <TheWelcome name = {nombres} />

ReactDOM.render(
  <React.StrictMode> 
      <Menu />
      {/* Llamar componente */}
      { WelcomeComponent }
      
      <h1>Equipo de Trabajo</h1>
      <Team />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
