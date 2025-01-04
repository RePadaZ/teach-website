import { Container, Row, Col, Card } from 'react-bootstrap';

export function Cards() {
    return (
        <>
            <Container className="mt-4 mb-4 vh-100">
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card Image" />
                            <Card.Body>
                                <Card.Title className="text-center">Clock</Card.Title>
                                <Card.Text as="a" href={'/cards/clock'} className="text-center d-block">
                                    Clock in JavaScript.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card Image" />
                            <Card.Body>
                                <Card.Title className="text-center">To Do List</Card.Title>
                                <Card.Text as="a" href={'/cards/todolist'} className="text-center d-block">
                                    Simple To Do List in JavaScript
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card Image" />
                            <Card.Body>
                                <Card.Title className="text-center">Карточка</Card.Title>
                                <Card.Text as="a" href="#" className="text-center d-block">
                                    Описание карточки.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card Image" />
                            <Card.Body>
                                <Card.Title className="text-center">Карточка</Card.Title>
                                <Card.Text as="a" href="#" className="text-center d-block">
                                    Описание карточки.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}
