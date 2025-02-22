import {TRPC} from "./init_trpc";
import {CreateContactForm} from "../router-model/router_model";

// Создаем роуетер для наших запросов
export const TRPC_ROUTER = TRPC.router({

    CreateContactForm: CreateContactForm,

});

// Экспортируем наш роутер
export type TRPC_ROUTER = typeof TRPC_ROUTER;