// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Barra from './components/Barra';
import GuardarEquipo from './components/GuardarEquipo'
import VerEquipos from './components/VerEquipos'



function App() {
  return (
    <Router>
      <Barra/>
      <Route path='/guardarEquipo' exact component = {GuardarEquipo}/>
      <Route path='/verEquipos' exact component = {VerEquipos}/>

    </Router>
  );
}

export default App;
