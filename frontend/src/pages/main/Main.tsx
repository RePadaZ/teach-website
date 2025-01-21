import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import scss from './main.module.scss';
import ImgPointer from '../../assets/pointer.svg'


const scrollToSection = () => {
    const section = document.getElementById('next-section');
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}

const cards = [
    {title: `HTML`, href: '/html', text: 'HTML text', button: 'HTML'},
    {title: `CSS`, href: '/css', text: 'CSS text', button: 'CSS'},
    {title: `JavaScript`, href: '/javascript', text: 'A programming language', button: 'Start learn JS'},
    {title: `Bootstrap`, href: '/bootstrap', text: 'Bootstrap text', button: 'Bootstrap'},
    {title: `TypeScript`, href: '/typescript', text: 'TypeScript text', button: 'TypeScript'},
    {title: `Java`, href: '/java', text: 'Java text', button: 'Java'},
    {title: `Golang`, href: '/golang', text: 'Golang text', button: 'Golang'},
    {title: `Rust`, href: '/rust', text: 'Rust text', button: 'Rust'},
];

export function Main() {
    return (
        <Container
            fluid
            className='min-vh-100'
        >
            <Row className="min-vh-100 p-0 position-relative">
                {/* Фон в виде адаптивной картинки */}
                <Col xs={12} className="p-0">
                    <Image
                        src="mainBackGround.jpg"
                        alt="Background"
                        className="w-100 h-100 object-fit-cover"
                    />

                    {/* Контент поверх фона */}
                    <div
                        className={`position-absolute top-50 start-50 translate-middle text-center text-white ${scss.ContentWrapper}`}>
                        <h1 className="display-3 fw-bold mb-4">
                            Learn to Code
                        </h1>
                        <h3 className="fs-4 mb-4">
                            You will find many useful resources here,
                            <br/>including articles, lessons, code examples, and practical assignments.
                        </h3>
                        <a
                            href="/to-start"
                            className={`fs-5 fw-bold ${scss.HoverEffect}`}
                        >
                            Not Sure Where To Begin?
                        </a>
                    </div>

                    {/* Стрелка для прокрутки */}
                    <a
                        className={`position-absolute start-50 translate-middle-x ${scss.PointerPosition}`}
                        onClick={scrollToSection}
                    >
                        <img className={scss.PointerCustomStyle} src={ImgPointer} alt="pointer"/>
                    </a>
                </Col>
            </Row>

            {/* Целевая секция */}
            <Row
                id="next-section"
                className="min-vh-100 py-5 px-3 text-light GlobalBackGround d-flex flex-wrap justify-content-center
                            align-items-start gap-4"
            >
                <div className="text-center fw-bold">
                    <h2>
                        Sections available for study
                    </h2>
                </div>
                {cards.map((card) => (
                    <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                        <Card className={`rounded-4 ${scss.CardsCustomStyle}`}>
                            <Card.Body>
                                <Card.Title className="text-center fs-5 fw-bold">{card.title}</Card.Title>
                                <Card.Text className="text-center text-muted fs-6 py-3">
                                    {card.text}
                                </Card.Text>
                                <div className="d-flex justify-content-center mt-3 py-2">
                                    <Button
                                        href={card.href}
                                        variant="primary"
                                        className={`px - 4 py-2 rounded-pill`}
                                    >
                                        {card.button}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
