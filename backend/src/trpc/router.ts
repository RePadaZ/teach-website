import {TRPC} from "./init_trpc";
import {CreateUserForm} from "../router-model/user_form";
import {CreateContactForm} from "../router-model/contact_form";

// Создаем роуетер для наших запросов
export const TRPC_ROUTER = TRPC.router({

    CreateContactForm: CreateContactForm,
    CreateUserForm: CreateUserForm,

});

// Экспортируем наш роутер
export type TRPC_ROUTER = typeof TRPC_ROUTER;