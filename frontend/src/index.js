import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Menu from './components/Menu';
import Team from './components/Team';

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
      <App />
      {/* <Menu /> */}
      {/* Llamar componente */}
      { WelcomeComponent }
      
      <h1>Equipo de Trabajo</h1>
      {/* <Team /> */}
      
  </React.StrictMode>,
  document.getElementById('root')
);


