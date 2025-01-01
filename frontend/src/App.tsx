import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./pages/template/Header.tsx";
import {Cards} from "./pages/cards/Cards.tsx";
import {Footer} from "./pages/template/Footer.tsx"
import {Main} from "./pages/main/Main.tsx";
import {Login} from "./pages/login/Login.tsx";
import {Sing} from "./pages/sign/Sign.tsx";
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
                    </Routes>
                </BrowserRouter>
            <Footer />
        </TRPC_PROVIDER>
    )
}