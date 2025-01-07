import { Container, Row, Col, Button } from 'react-bootstrap';

export function Footer() {
    return (
        <footer className='bg-dark text-white m-auto h-auto'>
            <Container>
                <Row className='p-3'>
                    <Col md={4} className="text-center">
                        <h5>Contacts</h5>
                        <p>Email: example@email.com</p>
                        <Button variant="primary" href="/contact" target="_blank" className="m-2 rounded-pill">
                            Contact form
                        </Button>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>About Us</h5>
                        <p>
                            I am a developer eager to help you master new technologies and improve your skills.
                            programming.
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Follow us</h5>
                        <Button variant="primary" href="#" target="_blank" className="m-2 rounded-pill">
                            Telegram
                        </Button>
                        <Button variant="primary" href="#" target="_blank" className="m-2 rounded-pill">
                            Discord
                        </Button>
                        <Button variant="primary" href="#" target="_blank" className="m-2 rounded-pill">
                            GitHub
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col>
                        <p>&copy; 2025 All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}