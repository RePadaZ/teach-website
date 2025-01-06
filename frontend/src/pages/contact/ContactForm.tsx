import {Container, Form, Button, Row, Col, Card} from 'react-bootstrap';
import scss from './contactFrom.module.scss';

export function ContactForm() {
    return (
        <Container fluid className='min-vh-100 GlobalBackGround'>
            <Container className="d-flex align-items-center vh-100 w-50">
                <Container className="py-lg-5">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card>
                                {/* Заголовок карточки */}
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        Send us a Message
                                    </h2>
                                    <Form id="form" className="container-form" action="" method="post">
                                        <Form.Group controlId="name">
                                            <Form.Label>First name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="email">
                                            <Form.Label>Your email:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="phone">
                                            <Form.Label>Your phone:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                placeholder="+7 999 999 99 99"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="textarea">
                                            <Form.Label>Your message:</Form.Label>
                                            <Form.Control
                                                className={scss.textAreaStyle}
                                                as="textarea"
                                                name="textarea"
                                                placeholder="Write your message. Max length of 500 characters"
                                                maxLength={500}
                                                required
                                            />
                                        </Form.Group>
                                        <footer className="footer mt-3">
                                            <Button variant="primary" type="submit">
                                                Send Message
                                            </Button>
                                            <p id="text-send" className="mt-2">
                                                Thanks for your feedback
                                            </p>
                                        </footer>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}