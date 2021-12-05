import React from 'react'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl , Button } from 'react-bootstrap'; 

export default function Barra()  {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#">Bienvenido : Francy</Navbar.Brand>
                <Navbar.Brand href="#">Cerrar Sesión</Navbar.Brand>
                
                

                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Registros</Nav.Link>
                        
                        <NavDropdown title="Registrar" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/verEquipos">Ver Equipos</NavDropdown.Item>
                            <NavDropdown.Item href="/guardarEquipo">Guardar Equipo</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    )
}
