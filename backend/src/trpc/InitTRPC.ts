import {initTRPC} from "@trpc/server";

// Создаем TRPC для связи типов между backend и frontend
export const TRPC = initTRPC.create();