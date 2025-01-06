import {Row, Col, Card, Form, Button, Container} from 'react-bootstrap';

export function Login() {
    return (
        /* Закрашиваем фон и задаем позицию блока */
        <Container fluid className="min-vh-100 GlobalBackGround">
            <Container className="d-flex align-items-center vh-100">
                <Container className="py-lg-5">
                    {/* Выравниваем нашу картучку и задаем размеры */}
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} md={9} lg={7} xl={6}>
                            <Card>
                                {/* Заголовок карточки */}
                                <Card.Body className="p-5">
                                    <h2 className="text-uppercase text-center mb-5">
                                        Login your account
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
                                        <Form.Group className="mb-4" controlId="form3Example4cg">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                size="lg"
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-check d-flex justify-content-center mb-4"
                                                    controlId="form2Example3cg">
                                            <Form.Check
                                                type="checkbox"
                                                label="Remember login details"
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
                                                Login
                                            </Button>
                                        </div>
                                        {/* Сслыка на страницу регистрации */}
                                        <p className="text-center py-3">
                                            You don't have an account yet?{' '}
                                            <a href={'/sign'} className="fw-bold text-body">
                                                <u>Sign up</u>
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

