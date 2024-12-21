import express from "express";

const expressApp = express();

expressApp.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

expressApp.listen(8080, () => {
    console.log("Server started on port 8080");
});

