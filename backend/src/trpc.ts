import {initTRPC} from "@trpc/server";
import {cards, header} from "./bd/fake-bd";

// Создаем TRPC для связи типов между backend и frontend
const TRPC = initTRPC.create();

// Создаем роуетер для наших запросов
export const TRPC_ROUTER = TRPC.router({

    getCards: TRPC.procedure.query(() => {
        return {cards};
    }),

    getHeader: TRPC.procedure.query(() => {
        return {header};
    })

});

// Экспортируем наш роутер
export type TRPC_ROUTER = typeof TRPC_ROUTER;