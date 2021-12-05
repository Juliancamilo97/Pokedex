import { BrowserRouter as  Route } from 'react-router-dom'
import React  from 'react'
import VerEquipos from './VerEquipos'
import GuardarEquipo from './GuardarEquipo'

const Index = () => {
              
    if (sessionStorage.getItem('token')) {            
        return (
            <div className = "container"> 
                <h1>Bienvenido Entrenador</h1>
                <Route path='/guardarEquipo' exact component = {GuardarEquipo}/>
                <Route path='/verEquipos' exact component = {VerEquipos}/>
            </div>
        )            
    }    else {
        window.location.href =  '/login'
    }
    


}

export default Index