import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap';

export function Header() {
    return (
        <Navbar expand="lg" className={`navbar - light bg-dark w-100`}>
            <Container fluid className="justify-content-between align-items-center">
                {/* Logo */}
                <Navbar.Brand href="/" className="text-white">
                    Logo
                </Navbar.Brand>

                {/* Navigation */}
                <Nav className="mx-auto gap-3">
                    {["Frontend", "Backend", "Game Developer", "1C Developer", "Services"].map((category) => (
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle
                                id={`${category.toLowerCase()}-dropdown`}
                                variant="outline-info"
                            >
                                {category}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {category === "Frontend" && (
                                    <>
                                        <Dropdown.Item href="/">Learn HTML</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn CSS</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn JavaScript</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn Bootstrap</Dropdown.Item>
                                    </>
                                )}
                                {category === "Backend" && (
                                    <>
                                        <Dropdown.Item href="/">Learn TypeScript</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn Java</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn Golang</Dropdown.Item>
                                    </>
                                )}
                                {category === "Game Developer" && (
                                    <>
                                        <Dropdown.Item href="/">Learn Rust</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn C#</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn C++</Dropdown.Item>
                                    </>
                                )}
                                {category === "1C Developer" && (
                                    <>
                                        <Dropdown.Item href="/">Learn Base 1C</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn Form</Dropdown.Item>
                                        <Dropdown.Item href="/">Learn Query</Dropdown.Item>
                                    </>
                                )}
                                {category === "Services" && (
                                    <>
                                        <Dropdown.Item href="/login">Login / Sign Up</Dropdown.Item>
                                        <Dropdown.Item href="/">Templates</Dropdown.Item>
                                        <Dropdown.Item href="/">How to create</Dropdown.Item>
                                        <Dropdown.Item href="/cards">Tech Examples</Dropdown.Item>
                                    </>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    ))}
                </Nav>

                {/* Login Button */}
                <Button
                    className="d-none d-lg-inline-block rounded-pill"
                    href="/login"
                    variant="primary"
                >
                    Login / Sign Up
                </Button>
            </Container>
        </Navbar>
    );
}

