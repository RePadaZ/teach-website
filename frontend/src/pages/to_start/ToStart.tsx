import {Container} from 'react-bootstrap';
import scss from './toStart.module.scss';

export function ToStart() {
    return (
        <Container
            fluid
            className={`d-flex justify-content-center align-items-center text-center ${scss.customBackStyle}`}
        >
            <div className=''>
                <h1 className=''>
                    Where To Start
                </h1>
                <h3 className=''>
                    To become a web developer, start with the subjects below,
                    <br/>in the following order:
                </h3>
            </div>
        </Container>
    )
}