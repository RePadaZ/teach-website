import {Container} from 'react-bootstrap';
import scss from './main.module.scss';

export function Main(){
    return (
        <Container
            fluid
            className={`d-flex justify-content-center align-items-center text-center ${scss.customBackStyle}`}
        >
            <div className=''>
                <h1 className=''>
                    Learn to Code
                </h1>

                <h3 className=''>
                    You will find many useful resources here,
                    <br/>including articles, lessons, code examples, and practical assignments.
                </h3>

            </div>

        </Container>
    )
}