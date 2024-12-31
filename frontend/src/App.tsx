import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./pages/template/Header.tsx";
import {Cards} from "./pages/cards/Cards.tsx";
import { Footer } from "./pages/template/Footer.tsx"

export const App = () => {
    return (
        <TRPC_PROVIDER>
            <Header />
            <Cards />
            <Footer />
        </TRPC_PROVIDER>
    )
} 