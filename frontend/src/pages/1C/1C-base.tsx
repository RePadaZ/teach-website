import {Container} from "react-bootstrap";

export function OneCBase() {
    return (
       <Container fluid className='min-vh-100 text-light GlobalBackGround'>
            <h1 className='text-center fw-bold py-5'>
                1C Обучение основ
            </h1>
           <div>
               <p>
                   Я собрал курсы по 1С-программированию. Они подойдут для тех,
                   кто хочет стать узконаправленным специалистом на внутреннем рынке.
               </p>
               <ul>
                   <li>
                       <a className='text-light' href="https://курсы-по-1с.рф/free/">
                           https://курсы-по-1с.рф/free/
                       </a>
                   </li>
                   <li>
                       <a className='text-light' href="https://uc1.1c.ru/courses/besplatno/">
                           https://uc1.1c.ru/courses/besplatno/
                       </a>
                   </li>
               </ul>
           </div>
       </Container>
    )
}