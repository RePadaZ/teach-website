import {TRPC} from "./init_trpc";
import {CreateUserForm} from "../router_model/create_user_form";
import {CreateContactForm} from "../router_model/contact_form";
import {LoginUserForm} from "../router_model/login_user_form";

// Создаем роуетер для наших запросов
export const TRPC_ROUTER = TRPC.router({

    CreateContactForm: CreateContactForm,
    CreateUserForm: CreateUserForm,
    LoginUserForm: LoginUserForm,

});

// Экспортируем наш роутер
export type TRPC_ROUTER = typeof TRPC_ROUTER;