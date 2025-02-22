import {initTRPC} from "@trpc/server";
import {AppContext} from "../ctx/ctx";

// Создаем TRPC для связи типов между backend и frontend
export const TRPC = initTRPC.context<AppContext>().create();