import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';

export function Sing() {
    return (
        /* Закрашиваем фон и задаем позицию блока */
        <Container fluid className='min-vh-100 GlobalBackGround'>
            <Container className="d-flex align-items-center vh-100">
                <Container>
                    {/* Выравниваем нашу картучку и задаем размеры */}
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card>
                                {/* Заголовок карточки */}
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        Create an account
                                    </h2>
                                    <Form>
                                        {/* Форма ввода данных пользователем */}
                                        <Form.Group className="mb-4" controlId="form3Example1cg">
                                            <Form.Label>Your Login</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Login"
                                                size="lg"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="form3Example3cg">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="mail@example.com"
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
                                        <Form.Group className="mb-4" controlId="form3Example4cdg">
                                            <Form.Label>Repeat your password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                size="lg"
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-check d-flex justify-content-center mb-4"
                                                    controlId="form2Example3cg">
                                            <Form.Check
                                                type="checkbox"
                                                label={
                                                    <>
                                                        I agree all statements in{' '}
                                                        <a href="#" className="text-body">
                                                            <u>Terms of service</u>
                                                        </a>
                                                    </>
                                                }
                                            />
                                        </Form.Group>
                                        <div className="d-flex justify-content-center">
                                            {/* Кнопка откравки данных */}
                                            <Button
                                                type="button"
                                                variant="success"
                                                size="lg"
                                                className="text-body custom-button-style"
                                            >
                                                Register
                                            </Button>
                                        </div>
                                        {/* Сслыка на страницу входа */}
                                        <p className="text-center py-3">
                                            Have already an account?{' '}
                                            <a href={'/login'} className="fw-bold text-body">
                                                <u>Login here</u>
                                            </a>
                                        </p>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

