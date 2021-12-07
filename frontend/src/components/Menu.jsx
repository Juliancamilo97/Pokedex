import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import { alignPropType } from 'react-bootstrap/esm/types';

export default function Barra()  {

    const [show, setShow] = useState(true)
    const [optionRegister, setOptionRegister] = useState(false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        
        if (sessionStorage.getItem('token')) {
            setMenu(true)
            setShow(false)
            setOptionRegister(true)
        }
    
    }, []);

    const out = () => {
        sessionStorage.clear()
        window.location.href = "/"
    }

    return (
        <div>
            <Navbar className="color-nav" expand="lg">
                <Container fluid>
                    <Navbar.Brand style={{color:'white'}} href="/"><i class="fas fa-home"></i></Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' , backgroundColor: 'var(--red)'}}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action2"> Buscador </Nav.Link> */}
                            <NavDropdown style={{color:'white'}} title=" Tu Equipo " id="navbarScrollingDropdown" hidden={show}>
                                <NavDropdown.Item href="/verEquipos">Ver Equipos</NavDropdown.Item>
                                <NavDropdown.Item href="/guardarEquipo">Guardar Equipo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Tus Favoritos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                    
                <Navbar.Brand><a style={{color:'white'}} hidden={optionRegister} href="/registerUser"><i class="fas fa-dragon"></i><i class="fas fa-user"></i> Hola Entrenador</a></Navbar.Brand>
                <Navbar.Brand hidden={show}>Hola {sessionStorage.getItem('name')} </Navbar.Brand>
                <Navbar.Brand hidden={show} href="" onClick={() => out()} >  <i class="fas fa-user-times"></i></Navbar.Brand>                
                </Container>

            </Navbar>

        </div>
    )
}
