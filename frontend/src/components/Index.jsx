import { BrowserRouter as  Route } from 'react-router-dom'
import VerEquipos from './VerEquipos'
import GuardarEquipo from './GuardarEquipo'

const Index = () => {
    return (
        <div className = "container"> 
            <h1>Bienvenido Entrenador</h1>
            <Route path='/guardarEquipo' exact component = {GuardarEquipo}/>
            <Route path='/verEquipos' exact component = {VerEquipos}/>
        </div>
    )
}

export default Index