import {Card, Col, Container, Row} from 'react-bootstrap';
import {TRPC} from "../../lib/trcp-create.tsx";


export function Cards() {

    const {data, error, isLoading, isFetching, isError} = TRPC.getCards.useQuery();

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
        <Container fluid className='min-vh-100 py-5 GlobalBackGround'>
            <Row xs={12} md={4} className="m-5">
                {data.cards.map((card) => (
                    <Col key={card.id}>
                        <Card key={card.id}>
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
