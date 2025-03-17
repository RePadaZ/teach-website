import {TRPC} from "./init_trpc";
import {CreateUserForm} from "../router_module/create_user_form";
import {CreateContactForm} from "../router_module/contact_form";
import {LoginUserForm} from "../router_module/login_user_form";
import {GetMe} from "../router_module/get_me";

// Создаем роуетер для наших запросов
export const TRPC_ROUTER = TRPC.router({

    CreateContactForm: CreateContactForm,
    CreateUserForm: CreateUserForm,
    LoginUserForm: LoginUserForm,
    GetMe: GetMe,

});

// Экспортируем наш роутер
export type TRPC_ROUTER = typeof TRPC_ROUTER;