import {Container, Row, Col, Card} from 'react-bootstrap';

export function Cards() {

    const cards = [
        { image: 'https://placehold.co/400', title: `Clock.`, href: '/cards/clock', text: 'Clock in JavaScript.'},
        { image: 'https://placehold.co/400', title: `ToDoList.`, href: '/cards/todolist', text: 'ToDolist in JavaScript.'},
        { image: 'https://placehold.co/400', title: `Clock.`, href: '/cards/clock', text: 'Clock in JavaScript.'},
        { image: 'https://placehold.co/400', title: `Clock.`, href: '/cards/clock', text: 'Clock in JavaScript.'},
    ];

    return (
        <Container fluid className='min-vh-100 py-5 GlobalBackGround'>
            <Row xs={12} md={4} className="m-5">
                {cards.map((card) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={card.image} alt="Card Image"/>
                            <Card.Body>
                                <Card.Title className="text-center">{card.title}</Card.Title>
                                <Card.Text as="a" href={card.href} className="text-center d-block">
                                    {card.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))};
            </Row>
        </Container>
    );
}
