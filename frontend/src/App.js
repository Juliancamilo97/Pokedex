import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Barra from './components/Barra';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import Index from './components/Index';
import VerEquipos from './components/VerEquipos'
import GuardarEquipo from './components/GuardarEquipo'


function App() {
  return (
    <Router>
      <Barra/>
      <Route path='/login' exact component = {Login}/>
      <Route path='/' exact component = {Index}/>
      <Route path='/registerUser' exact component = {RegisterUser}/>
      <Route path='/guardarEquipo' exact component = {GuardarEquipo}/>
      <Route path='/verEquipos' exact component = {VerEquipos}/>

    </Router>
  );
}

export default App;
