import {Navbar, Nav, NavDropdown, Form, Button, Container} from 'react-bootstrap';
import scss from './header.module.scss';

export function Header() {
    return (
        <header className={`d-flex col-lg-8 bg-dark mt-lg-3 justify-content-center mx-auto p-1 ${scss.customNavbarStyle}`}>
            <Navbar expand="lg" className="navbar-light gap-4">
                <Container>
                    <Navbar.Brand href={'/'} className='me-lg-5 text-white'>Logo</Navbar.Brand>
                    <Nav className='ms-lg-5 gap-3'>
                        <NavDropdown title="Frontend" id="frontend-dropdown" className={scss.customButtonStyle}>
                            <NavDropdown.Item href={'/'}>Learn HTML</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn CSS</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn Bootstrap</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Backend" id="backend-dropdown" className={scss.customButtonStyle}>
                            <NavDropdown.Item href={'/'}>Learn TypeScript</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn Java</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn Golang</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Services" id="services-dropdown" className={`me-lg-5 ${scss.customButtonStyle}`}>
                            <NavDropdown.Item href={'/login'}>Login in / Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Templates</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>How to create</NavDropdown.Item>
                            <NavDropdown.Item href={'/cards'}>My project</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className='d-flex ms-auto ms-lg-5 me-lg-4'>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-lg-2"
                            aria-label="Search"
                        />
                        <Button type="submit" className={`btn-secondary ${scss.customButtonStyle}`}>
                            Search
                        </Button>
                    </Form>
                    <Button href={'/login'} className={`btn-secondary ms-lg-5 ${scss.customButtonStyle}`}>
                        Sign Up / Login in
                    </Button>
                </Container>
            </Navbar>
        </header>
    );
}
