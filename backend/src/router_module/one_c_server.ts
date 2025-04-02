import {z} from "zod";
import {TRPC} from "../trpc/init_trpc";
import {exec} from "child_process";
import {promisify} from "util";
import * as fs from "node:fs";

const execPromise = promisify(exec); // Промисифицируем exec

export const OneCServer = TRPC.router({
    executeScript: TRPC.procedure
        .input(z.object({scriptString: z.string()}))
        .mutation(async ({input}) => {
            try {
                await writeFileContent(input.scriptString);
                const result = await DevServer1C();
                return {output: result};
            } catch (error) {
                if (error instanceof Error) {
                    return {output: error.message};  // Если ошибка - объект Error, возвращаем его сообщение
                }
            }
        }),
});

async function writeFileContent(content: string) {
    try {
        fs.writeFile("C:/Users/padaz/project-web-app/TypeScript/WebSite/teach-website/backend/main.os", content, "utf-8", (err) => {
            if (err) {
                throw err;
            }
        });
        console.log("Файл записан");
    } catch (error) {
        console.error("Ошибка записи файла:", error);
    }
}

async function DevServer1C(): Promise<Promise<string>> {
    try {
        const {stdout} = await execPromise('oscript main.os');
        return stdout;
    } catch (error: unknown) {
        // @ts-ignore
        const arrString = error.stdout.split("/");
        return `Извините возникла ошибка ${arrString[1]} ${arrString[2]}`;
    }
}