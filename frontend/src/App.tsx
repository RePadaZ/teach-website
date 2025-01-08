import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./pages/header/Header.tsx";
import {Cards} from "./pages/cards/Cards.tsx";
import {Footer} from './pages/footer/Footer.tsx'
import {Main} from "./pages/main/Main.tsx";
import {Login} from "./pages/login/Login.tsx";
import {Sing} from "./pages/sign/Sign.tsx";
import {ToStart} from "./pages/to_start/ToStart.tsx";
import {Clock} from "./pages/tech-examples/Clock.tsx";
import {ToDoList} from "./pages/tech-examples/ToDoList.tsx";
import {ContactForm} from "./pages/contact/ContactForm.tsx";
import {OneCBase} from "./pages/1C/1C-base.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


export const App = () => {
    return (
        <TRPC_PROVIDER>
            {<Header />}
                <BrowserRouter>
                    <Routes >
                        <Route path={'/'} element={<Main/>} />
                        <Route path={'/tech-examples'} element={<Cards />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path={'/sign'} element={<Sing />} />
                        <Route path={'/to-start'} element={<ToStart />} />
                        <Route path={'/tech-examples/clock'} element={<Clock />} />
                        <Route path={'/tech-examples/todolist'} element={<ToDoList />} />
                        <Route path={'/contact'} element={<ContactForm />} />
                        <Route path={'/1C-Base'} element={<OneCBase />} />
                    </Routes>
                </BrowserRouter>
            <Footer />
        </TRPC_PROVIDER>
    )
}