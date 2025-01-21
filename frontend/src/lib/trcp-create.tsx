import {createTRPCReact} from "@trpc/react-query";
import type {TRPC_ROUTER} from "@teach-website/backend/src/trpc.ts";

/*
 Так как это отдельный команет React мы его создаем в отдельном файле
 чтоб каждый компонет был в своем файле
 */
export const TRPC = createTRPCReact<TRPC_ROUTER>();