import {TrpcProvider} from "./lib/trpc.tsx";
import {Header} from "./components/header/header.tsx";
import {TechExamples} from "./pages/tech-examples/tech-examples.tsx";
import {Footer} from './components/footer/footer.tsx'
import {Main} from "./pages/main/main.tsx";
import {Login} from "./pages/login/login.tsx";
import {Sign} from "./pages/sign/sign.tsx";
import {ToStart} from "./pages/to-start/to-start.tsx";
import {Clock} from "./pages/tech-examples-pages/clock.tsx";
import {ToDoList} from "./pages/tech-examples-pages/to_do_list.tsx";
import {ContactForm} from "./pages/contact/contact_form.tsx";
import {OneCBaseMain} from "./pages/1C/one_c_base_main.tsx";
import {OneCBaseFundamentals} from "./pages/1C/one_c_base_fundamentals.tsx"
import {LogOut} from "./pages/log-out/log_out.tsx";
import {OneCServer} from "./pages/1C/one_c_server.tsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";


export const App = () => {
    return (
        <TrpcProvider>
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
                    <Route path={'/1C-Base'} element={<OneCBaseMain/>}/>
                    <Route path={'/1C-Base/OneCBaseFundamentals'} element={<OneCBaseFundamentals/>}/>
                    <Route path={'/LogOut'} element={<LogOut/>}/>
                    <Route path={'/1C-Base/1C-server'} element={<OneCServer/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </TrpcProvider>
    )
}