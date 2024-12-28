import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export function Login() {
    return (
        <div className="bg-dark-subtle">
            <main className="py-lg-5">
                <section className="py-lg-5">
                    <div className="d-flex align-items-center gradient-custom-2">
                        <Container>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col xs={12} md={9} lg={7} xl={6}>
                                    <Card>
                                        <Card.Body className="p-5">
                                            <h2 className="text-uppercase text-center mb-5">
                                                Login your account
                                            </h2>
                                            <Form>
                                                <Form.Group className="mb-4" controlId="form3Example1cg">
                                                    <Form.Label>Your Login</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Login"
                                                        size="lg"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="form3Example4cg">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        size="lg"
                                                    />
                                                </Form.Group>
                                                <Form.Group className="form-check d-flex justify-content-center mb-4" controlId="form2Example3cg">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Remember login details"
                                                    />
                                                </Form.Group>
                                                <div className="d-flex justify-content-center">
                                                    <Button
                                                        type="button"
                                                        variant="success"
                                                        size="lg"
                                                        className="text-body custom-button-style"
                                                    >
                                                        Login
                                                    </Button>
                                                </div>
                                                <p className="text-center py-3">
                                                    You don't have an account yet?{' '}
                                                    <a href="#" className="fw-bold text-body">
                                                        <u>Sign up</u>
                                                    </a>
                                                </p>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </main>
        </div>
    );
}

