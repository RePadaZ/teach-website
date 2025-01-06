import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import scss from './toStart.module.scss';

export function ToStart() {
    const cards = [
        {
            title: 'First web page', text: `In this lesson we will create your first web page and cover the basics.`,
            button: 'Start studying html', href: '/html'
        },
        {
            title: 'Style basics', text: `In this lesson we will get acquainted with styles and add them to our page.`,
            button: 'Start studying css', href: '/css'
        },
        {
            title: 'Dynamic page JS', text: `In this tutorial we will learn how to use JavaScript to add dynamics to
                    our web page.`,
            button: 'Start studying JS', href: '/javascript'
        },
    ];

    return (
        <Container fluid className='min-vh-100 py-5 GlobalBackGround'>
            <Row className='mt-3 justify-content-center'>
                {cards.map((card, index) => (
                    <Col
                        key={index}
                        md={{span: 6, offset: index % 2 === 0 ? 0 : 6}} // Смещение: справа или слева
                        className='mb-4'
                        style={{marginTop: `${index * 20}px`}}
                    >
                        <Card className={scss.CustomStyleCard}>
                            <Card.Body>
                                <Card.Title className='fs-4'>
                                        {index + 1}. {card.title}
                                </Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                                <Button className='btn-primary' href={card.href}>
                                    {card.button}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}