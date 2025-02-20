import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./components/header/Header.tsx";
import {TechExamples} from "./pages/tech-examples/TechExamples.tsx";
import {Footer} from './components/footer/Footer.tsx'
import {Main} from "./pages/main/Main.tsx";
import {Login} from "./pages/login/Login.tsx";
import {Sign} from "./pages/sign/Sign.tsx";
import {ToStart} from "./pages/to-start/ToStart.tsx";
import {Clock} from "./pages/tech-examples-pages/Clock.tsx";
import {ToDoList} from "./pages/tech-examples-pages/ToDoList.tsx";
import {ContactForm} from "./pages/contact/ContactForm.tsx";
import {OneCBase} from "./pages/1C/1C-base.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export const App = () => {
    return (
        <TRPC_PROVIDER>
            <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/tech-examples'} element={<TechExamples/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/sign'} element={<Sign/>}/>
                        <Route path={'/to-start'} element={<ToStart/>}/>
                        <Route path={'/tech-examples/clock'} element={<Clock/>}/>
                        <Route path={'/tech-examples/todolist'} element={<ToDoList/>}/>
                        <Route path={'/contact'} element={<ContactForm/>}/>
                        <Route path={'/1C-Base'} element={<OneCBase/>}/>
                    </Routes>
                </BrowserRouter>
            <Footer/>
        </TRPC_PROVIDER>
    )
}