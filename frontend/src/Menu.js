import home from './home-solid.svg';
import './Menu.css';

function Menu() {
    return (
        <div className="topnav">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <a class="home-class" href="#step"><img src={home} alt="Home"/></a>
            <div class="topnav-left">
                <a href="#step">Paso a Paso</a>
                <a href="#calculate">Calcula tu Rentabilidad</a>
                <a href="#contact">Contáctanos</a>
                <a href="#team">Nuestro Equipo</a>
            </div>
        </div>
    );
}

export default Menu;
