import {Navbar, Nav, NavDropdown, Button, Container, Dropdown} from 'react-bootstrap';
import scss from './header.module.scss';

export function Header() {
    return (
        <Navbar expand="lg" className="navbar-light w-100 d-flex col-lg-8 bg-dark">
            <Container fluid className="justify-content-between align-items-center">

                {/* Logo */}
                <Navbar.Brand href={'/'} className="text-white">
                    Logo
                </Navbar.Brand>

                {/* Navigation */}
                <Nav className="mx-auto gap-3">
                    <NavDropdown
                        title="Frontend"
                        id="frontend-dropdown"
                        className={`btn-secondary bg-white text-dark ${scss.customButtonStyle}`}
                    >
                        <Dropdown.Item href={'/'}>Learn HTML</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Learn CSS</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Learn Bootstrap</Dropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        title="Backend"
                        id="backend-dropdown"
                        className={`btn-secondary bg-white text-dark ${scss.customButtonStyle}`}
                    >
                        <Dropdown.Item href={'/'}>Learn TypeScript</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Learn Java</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Learn Golang</Dropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        title="Game developer"
                        id="frontend-dropdown"
                        className={`btn-secondary bg-white text-dark ${scss.customButtonStyle}`}
                    >
                        <Dropdown.Item href={'/'}>Learn Rust</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Learn C#</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Learn C++</Dropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        title="Services"
                        id="services-dropdown"
                        className={`btn-secondary bg-white text-dark ${scss.customButtonStyle}`}
                    >
                        <Dropdown.Item href={'/login'}>Login in / Sign Up</Dropdown.Item>
                        <Dropdown.Item href={'/'}>Templates</Dropdown.Item>
                        <Dropdown.Item href={'/'}>How to create</Dropdown.Item>
                        <Dropdown.Item href={'/cards'}>Tech examples</Dropdown.Item>
                    </NavDropdown>
                </Nav>

                {/* Login Button */}
                <Button
                    href={'/login'}
                    className={`btn-secondary bg-white text-dark text-dark ${scss.customButtonStyle}`}
                >
                    Login in / Sign Up
                </Button>
            </Container>
        </Navbar>
    );
}

