import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express"
import { TRPC_ROUTER } from "./trpc"

// Создаем приложения Express
const expressApp = express();

// Создали тестовый endpoint
expressApp.get("/", (req, res) => {
    res.send("Welcome to the backend!");
})

// Создаем endpoint для TRPC который будет обрабатывать все наши endpoint
expressApp.use("/", trpcExpress.createExpressMiddleware({
    router: TRPC_ROUTER,
}))

// Включаем прослушку 8080 порта для нашего сервера
expressApp.listen(8080, () => {
    console.log("Server started on port http://localhost:8080/");
});

