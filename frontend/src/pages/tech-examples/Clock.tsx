import {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

export function Clock() {

    {/* Создание состояния для времени */}
    const [time, setTime] = useState<Date>(new Date());

    {/* Настройка интервала */}
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    {/* Создание состояния для времени */}
    return (
        <Container fluid className="min-vh-100 GlobalBackGround">
            <Row className="text-light py-5 justify-content-center">
                <Col xs={12} md={8} lg={6} className="text-center">
                    <h2 className="mb-3">Часы на JavaScript</h2>
                    <p className="fs-5">
                        Узнайте, как создать часы на чистом JavaScript и с использованием React.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Card className="p-5 bg-light shadow-lg text-center">
                        <span className="fs-1 fw-bold">{time.toLocaleTimeString()}</span>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
