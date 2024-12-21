import {initTRPC} from "@trpc/server";

// Создаем TRPC для связи типов между backend и frontend
const TRPC = initTRPC.create();

// Создаем роуетер для наших запросов
export const TRPC_ROUTER = TRPC.router({

    getCard: TRPC.procedure.query(() => {
        return {text: "hello world"};
    })

});

// Экспортируем наш роутер
export type TRPC_ROUTER = typeof TRPC_ROUTER;