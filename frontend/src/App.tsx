import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./pages/template/Header.tsx";
import {Cards} from "./pages/cards/Cards.tsx";
import {TestPage} from "./pages/TestPage.tsx";

export const App = () => {
    return (
        <TRPC_PROVIDER>
            <Header />
            <Cards />
            <TestPage />
        </TRPC_PROVIDER>
    )
}