import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap';

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
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                            id="frontend-dropdown"
                            variant="outline-info"
                        >
                            Frontend
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Learn HTML</Dropdown.Item>
                            <Dropdown.Item href="/">Learn CSS</Dropdown.Item>
                            <Dropdown.Item href="/">Learn Bootstrap</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                            id="backend-dropdown"
                            variant="outline-info"
                        >
                            Backend
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Learn TypeScript</Dropdown.Item>
                            <Dropdown.Item href="/">Learn Java</Dropdown.Item>
                            <Dropdown.Item href="/">Learn Golang</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                            id="game-dev-dropdown"
                            variant="outline-info"
                        >
                            Game Developer
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/">Learn Rust</Dropdown.Item>
                            <Dropdown.Item href="/">Learn C#</Dropdown.Item>
                            <Dropdown.Item href="/">Learn C++</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                            key='Info'
                            id="services-dropdown"
                            variant="outline-info"
                        >
                            Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/login">Login / Sign Up</Dropdown.Item>
                            <Dropdown.Item href="/">Templates</Dropdown.Item>
                            <Dropdown.Item href="/">How to create</Dropdown.Item>
                            <Dropdown.Item href="/cards">Tech Examples</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

                {/* Login Button */}
                <Button
                    className='me-5'
                    href={'/login'}
                    variant="outline-info"
                >
                    Login in / Sign Up
                </Button>
            </Container>
        </Navbar>
    );
}

