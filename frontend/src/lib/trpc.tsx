import {TRPC} from "./trcp-create.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {httpBatchLink} from "@trpc/client";

/*
React query которая упрвляет логикой запросов а не типами
Так же здесь производим его настройку
*/
const QUERY_CLIENT = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
})

/*
Создаем TRPC клиент и указываем для него где находится его endpoint
для всех TRPC роутеров. Мы его пределели на backend в index.ts
в строке "expressApp.use".
 */
const TRPC_CLIENT = TRPC.createClient({
    links: [
        httpBatchLink({
            url: "http://localhost:8080",
        }),
    ],
})

// Обработчик TRPC для наших данных
export const TRPC_PROVIDER = ({children} : {children: React.ReactNode}) => {
    return (
        <TRPC.Provider client={TRPC_CLIENT} queryClient={QUERY_CLIENT}>
            <QueryClientProvider client={QUERY_CLIENT}>{children}</QueryClientProvider>
        </TRPC.Provider>
    )
}