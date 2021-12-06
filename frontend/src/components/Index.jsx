import React  from 'react'
import VerEquipos from './VerEquipos'
import GuardarEquipo from './GuardarEquipo'

const Index = () => {
              
    if (sessionStorage.getItem('token')) {            
        return (
            <div className="pokedex">
                <div className="pokedex-left">
                    <div className="pokedex-left-top">
                        <div className='light is-sky is-big'/>
                        <div className="light is-red" />
                        <div className="light is-yellow" />
                        <div className="light is-green" />
                        <h1>Bienvenido Entrenador</h1>
                    </div>
                    <GuardarEquipo/>
                    <VerEquipos/>
                </div>                
            </div>
        )            
    }    else {
        window.location.href =  '/login'
    }
    


}

export default Index