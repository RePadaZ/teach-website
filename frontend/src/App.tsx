import {TRPC_PROVIDER} from "./lib/trpc.tsx";
import {Header} from "./Header.tsx";

export const App = () => {
    return (
        <TRPC_PROVIDER>
            <Header />
        </TRPC_PROVIDER>
    )
}