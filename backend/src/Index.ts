import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import {TRPC_ROUTER} from "./trpc/Router";


// Создаем приложения Express
const expressApp = express();

// Используем cors для того чтоб решить проблему запросов с клиета на наш сервер
expressApp.use(cors());

// Создаем endpoint для TRPC который будет обрабатывать все наши endpoint
expressApp.use("/", trpcExpress.createExpressMiddleware({
    router: TRPC_ROUTER,
}))

// Включаем прослушку 8080 порта для нашего сервера
expressApp.listen(8080, () => {
    console.log("Server started on port http://localhost:8080/");
});

