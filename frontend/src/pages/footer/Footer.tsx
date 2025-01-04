import { Container, Row, Col, Button } from 'react-bootstrap';
// import scss from './footer.module.scss'

export function Footer() {
    return (
        <footer className={`bg-dark text-white m-auto h-auto`}>
            <Container>
                <Row className='p-3'>
                    <Col md={4} className="text-center">
                        <h5>Contacts</h5>
                        <p>Email: example@email.com</p>
                        <a className='link-info' href='/contact'>
                            Contact form
                        </a>
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
                        <Button variant="outline-info" href="#" target="_blank" className="m-2">
                            Telegram
                        </Button>
                        <Button variant="outline-info" href="#" target="_blank" className="m-2">
                            Discord
                        </Button>
                        <Button variant="outline-info" href="#" target="_blank" className="m-2">
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