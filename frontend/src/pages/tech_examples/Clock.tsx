import {useEffect, useState} from "react";
import {Card, Container} from "react-bootstrap";

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
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-5 bg-light shadow-lg fs-1">
                {time.toLocaleTimeString()}
            </Card>
        </Container>
    )
}
