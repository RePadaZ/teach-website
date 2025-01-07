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
                                        <Dropdown.Item href="/html">Learn HTML</Dropdown.Item>
                                        <Dropdown.Item href="/css">Learn CSS</Dropdown.Item>
                                        <Dropdown.Item href="/java-script">Learn JavaScript</Dropdown.Item>
                                        <Dropdown.Item href="/bootstrap">Learn Bootstrap</Dropdown.Item>
                                    </>
                                )}
                                {category === "Backend" && (
                                    <>
                                        <Dropdown.Item href="/type-script">Learn TypeScript</Dropdown.Item>
                                        <Dropdown.Item href="/java">Learn Java</Dropdown.Item>
                                        <Dropdown.Item href="/golang">Learn Golang</Dropdown.Item>
                                    </>
                                )}
                                {category === "Game Developer" && (
                                    <>
                                        <Dropdown.Item href="/rust">Learn Rust</Dropdown.Item>
                                        <Dropdown.Item href="/C#">Learn C#</Dropdown.Item>
                                        <Dropdown.Item href="/C++">Learn C++</Dropdown.Item>
                                    </>
                                )}
                                {category === "1C Developer" && (
                                    <>
                                        <Dropdown.Item href="/1c-base">Learn Base 1C</Dropdown.Item>
                                        <Dropdown.Item href="/1c-form">Learn Form</Dropdown.Item>
                                        <Dropdown.Item href="/1c-query">Learn Query</Dropdown.Item>
                                    </>
                                )}
                                {category === "Services" && (
                                    <>
                                        <Dropdown.Item href="/login">Login / Sign Up</Dropdown.Item>
                                        <Dropdown.Item href="/templates">Templates</Dropdown.Item>
                                        <Dropdown.Item href="/how-to-create">How to create</Dropdown.Item>
                                        <Dropdown.Item href="/tech-examples">Tech Examples</Dropdown.Item>
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

