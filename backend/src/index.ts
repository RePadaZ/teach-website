import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import {TRPC_ROUTER} from "./trpc/router";
import {AppContext, CreateAppContext} from "./ctx/ctx";


// Обертка в async если для дожидания завершения процессов
void (async () => {
    // Создание контекста
    let ctx: AppContext | null = null;
    try {
        // Присвоение контекста
        ctx = CreateAppContext()

        // Создаем приложения Express
        const expressApp = express();

        // Используем cors для того чтоб решить проблему запросов с клиета на наш сервер
        expressApp.use(cors());

        // Создаем endpoint для TRPC который будет обрабатывать все наши endpoint
        expressApp.use("/", trpcExpress.createExpressMiddleware({
            router: TRPC_ROUTER,
            createContext: CreateAppContext,
    }))

        // Включаем прослушку 8080 порта для нашего сервера
        expressApp.listen(8080, () => {
            console.log("Server started on port http://localhost:8080/");
        });
    } catch (err) {
        console.log(err);
        await ctx?.stop()
    }
})()