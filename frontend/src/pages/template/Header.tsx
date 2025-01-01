import {Navbar, Nav, NavDropdown, Button, Container} from 'react-bootstrap';
import scss from './header.module.scss';

export function Header() {
    return (
        <header
            className={`d-flex col-lg-8 bg-dark mt-lg-3 justify-content-center mx-auto p-1 ${scss.customNavbarStyle}`}
        >
            <Navbar expand="lg" className="navbar-light w-100">
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
                            className={scss.customButtonStyle}
                        >
                            <NavDropdown.Item href={'/'}>Learn HTML</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn CSS</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn Bootstrap</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Backend"
                            id="backend-dropdown"
                            className={scss.customButtonStyle}
                        >
                            <NavDropdown.Item href={'/'}>Learn TypeScript</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn Java</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn Golang</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Game developer"
                            id="frontend-dropdown"
                            className={scss.customButtonStyle}
                        >
                            <NavDropdown.Item href={'/'}>Learn Rust</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn C#</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Learn C++</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Services"
                            id="services-dropdown"
                            className={scss.customButtonStyle}
                        >
                            <NavDropdown.Item href={'/login'}>Login in / Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>Templates</NavDropdown.Item>
                            <NavDropdown.Item href={'/'}>How to create</NavDropdown.Item>
                            <NavDropdown.Item href={'/cards'}>My project</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* Login Button */}
                    <Button
                        href={'/login'}
                        className={`btn-secondary ${scss.customButtonStyle}`}
                    >
                        Sign Up / Login in
                    </Button>
                </Container>
            </Navbar>
        </header>
    );
}

