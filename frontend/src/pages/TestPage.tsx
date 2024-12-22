import {TRPC} from "../lib/trcp-create.tsx";



export function TestPage() {

    const {data, isLoading, error, isError} = TRPC.getCards.useQuery();

    if (isError) {
        return <div>{error.message}</div>;
    }
    if (isLoading) {
        return (<div>Loading...</div>)
    }
    return (<div>
        {data.Nik}
    </div>)
}