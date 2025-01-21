import {Button, Container, Dropdown, Nav, Navbar} from 'react-bootstrap';
import {TRPC} from "../../lib/trcp-create.tsx";

export function Header() {

    const {data, error, isLoading, isFetching, isError} = TRPC.getHeader.useQuery();

    if (isError) {
        return <span>{error.message}</span>;
    }
    if (isLoading) {
        return <span>Loading...</span>;
    }
    if (isFetching){
        return <span>Loading...</span>;
    }

    return (
        <Navbar expand="lg" className={`navbar - light bg-dark w-100`}>
            <Container fluid className="justify-content-between align-items-center">
                {/* Logo */}
                <Navbar.Brand href="/" className="text-white">
                    Logo
                </Navbar.Brand>

                {/* Navigation */}
                <Nav className="mx-auto gap-3">
                    {data.header.map((category) => (
                        <Dropdown key={category.id} data-bs-theme="dark">
                            <Dropdown.Toggle
                                id={`${category.name.toLowerCase()}-dropdown`}
                                variant="outline-info"
                            >
                                {category.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {category.items.map((item, index) => (
                                    <Dropdown.Item key={index} href={item.href}>
                                        {item.label}
                                    </Dropdown.Item>
                                ))}
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

