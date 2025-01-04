import { Container, Row, Col, Image } from 'react-bootstrap';
import scss from './main.module.scss';

export function Main() {
    return (
        <Container
            fluid
            className={`p-0 ${scss.mainContainer}`}
        >
            <Row className='g-0'>
                {/* Фон в виде адаптивной картинки */}
                <Col xs={12} className='position-relative p-0'>
                    <Image
                        src="mainBackGround.jpg" // Путь к изображению
                        alt="Background"
                        className='img-fluid w-100 h-100'
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Контент поверх фона */}
                    <div className={`position-absolute top-50 start-50 translate-middle 
                                     text-center text-white ${scss.contentWrapper}`}>
                        <h1 className='fs-1 fw-bold'>
                            Learn to Code
                        </h1>
                        <h3 className='fs-3 mb-4'>
                            You will find many useful resources here,
                            <br/>including articles, lessons, code examples, and practical assignments.
                        </h3>
                        <a
                            href="/to_start"
                            className={`fs-4 fw-bold ${scss.hoverEffect}`}
                        >
                            Not Sure Where To Begin?
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
