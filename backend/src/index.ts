import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express"
import { TRPC_ROUTER } from "./trpc"

const expressApp = express();

expressApp.get("/", (req, res) => {
    res.send("Welcome to the backend!");
})

expressApp.use("/", trpcExpress.createExpressMiddleware({
    router: TRPC_ROUTER,
}))

expressApp.listen(8080, () => {
    console.log("Server started on port http://localhost:8080/");
});

