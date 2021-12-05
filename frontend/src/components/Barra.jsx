import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl , Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'

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
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><i class="fas fa-home"></i> Home</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action2"> Buscador </Nav.Link> */}

                            <NavDropdown title=" Tu Cuenta " id="offcanvasNavbarDropdown" >                         
                                <NavDropdown.Item href="/"><i class="fas fa-user-alt"></i> Iniciar Sesión</NavDropdown.Item>
                                <NavDropdown.Item> <Link hidden={optionRegister} to="/registerUser"> <i class="fas fa-user-plus"></i> Registro de Usuario</Link></NavDropdown.Item>
                                <NavDropdown.Item hidden={show} href="#" onClick={() => out()} ><i class="fas fa-user-times"></i> Cerrar Sesión </NavDropdown.Item>
                                <NavDropdown.Item href="/deleteUser"><i class="fas fa-user-minus"></i> Eliminar Usuario</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title=" Tu Equipo " id="navbarScrollingDropdown" hidden={show}>
                                <NavDropdown.Item href="/verEquipos">Ver Equipos</NavDropdown.Item>
                                <NavDropdown.Item href="/guardarEquipo">Guardar Equipo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Tus Favoritos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        {/* <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Búsqueda Rápida"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form> */}
                    </Navbar.Collapse>

                </Container>

                <Navbar.Brand hidden={show} href="#"><i class="fas fa-dragon"></i> <i class="fas fa-user"></i> Hola Entrenador {sessionStorage.getItem('name')} </Navbar.Brand>
                <Navbar.Brand hidden={show} href="#">  <i class="fas fa-user-times"></i></Navbar.Brand>
            </Navbar>

        </div>
    )
}
