import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';

export function Header() {
    return (
        <div className="bg-dark-subtle text-light">
            <header className="d-flex col-lg-8 bg-dark mt-lg-3 justify-content-center mx-auto custom-border-nav p-1">
                <Navbar expand="lg" className="navbar-light gap-4">
                    <Container>
                        <Navbar.Brand href="#" className="me-lg-5">Logo</Navbar.Brand>
                        <Nav className="ms-lg-5 gap-3">
                            <NavDropdown title="Frontend" id="frontend-dropdown" className="custom-button-style">
                                <NavDropdown.Item href="#">Learn HTML</NavDropdown.Item>
                                <NavDropdown.Item href="#">Learn CSS</NavDropdown.Item>
                                <NavDropdown.Item href="#">Learn Bootstrap</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Backend" id="backend-dropdown" className="custom-button-style">
                                <NavDropdown.Item href="#">Learn PHP</NavDropdown.Item>
                                <NavDropdown.Item href="#">Learn Java</NavDropdown.Item>
                                <NavDropdown.Item href="#">Learn Golang</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="services-dropdown" className="me-lg-5 custom-button-style">
                                <NavDropdown.Item href="#">Login in / Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="#">Templates</NavDropdown.Item>
                                <NavDropdown.Item href="#">How to create</NavDropdown.Item>
                                <NavDropdown.Item href="#">My project</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex ms-auto ms-lg-5 me-lg-4">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-lg-2"
                                aria-label="Search"
                            />
                            <Button type="submit" className="btn-secondary custom-button-style">
                                Search
                            </Button>
                        </Form>
                        <Button href="#" className="btn-secondary custom-button-style ms-lg-5">
                            Sign Up / Login in
                        </Button>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}
