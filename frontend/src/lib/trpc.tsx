import type {TRPC_ROUTER} from "@ideanick/backend/src/trpc"
import {createTRPCReact, httpBatchLink} from "@trpc/react-query";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";

const TRPC = createTRPCReact<TRPC_ROUTER>();

const QUERY_CLIENT = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
})

const TRPC_CLIENT = TRPC.createClient({
    links: [
        httpBatchLink({
            url: "http://localhost:8080",
        }),
    ],
})

export const TRPC_PROVIDER = ({children} : {children: React.ReactNode}) => {
    return (
        <TRPC.Provider client={TRPC_CLIENT} queryClient={QUERY_CLIENT}>
            <QueryClientProvider client={QUERY_CLIENT}>{children}</QueryClientProvider>
        </TRPC.Provider>
    )
}