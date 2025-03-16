import {inferAsyncReturnType, initTRPC} from "@trpc/server";
import {type AppContext} from "../ctx/ctx";
import * as trpcExpress from "@trpc/server/adapters/express";
import {ExpressRequest} from "../util_module/types";

export const getCreateTrPC = (appContext: AppContext) =>
    ({req}: trpcExpress.CreateExpressContextOptions) => ({
        ...appContext,
        me: (req as ExpressRequest).user || null,
    })

type TRPC_Context = inferAsyncReturnType<ReturnType<typeof getCreateTrPC>>;

// Создаем TRPC для связи типов между backend и frontend
export const TRPC = initTRPC.context<TRPC_Context>().create();