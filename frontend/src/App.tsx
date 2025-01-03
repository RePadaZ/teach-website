import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./pages/header/Header.tsx";
import {Cards} from "./pages/cards/Cards.tsx";
import {Footer} from './pages/footer/Footer.tsx'
import {Main} from "./pages/main/Main.tsx";
import {Login} from "./pages/login/Login.tsx";
import {Sing} from "./pages/sign/Sign.tsx";
import {ToStart} from "./pages/to_start/ToStart.tsx";
import {Clock} from "./pages/tech_examples/Clock.tsx";
import {ToDoList} from "./pages/tech_examples/ToDoList.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export const App = () => {
    return (
        <TRPC_PROVIDER>
            {<Header />}
                <BrowserRouter>
                    <Routes >
                        <Route path="/" element={<Main/>} />
                        <Route path="/cards" element={<Cards />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign" element={<Sing />} />
                        <Route path="/to_start" element={<ToStart />} />
                        <Route path="/cards/clock" element={<Clock />} />
                        <Route path="/cards/todolist" element={<ToDoList />} />
                    </Routes>
                </BrowserRouter>
            <Footer />
        </TRPC_PROVIDER>
    )
}