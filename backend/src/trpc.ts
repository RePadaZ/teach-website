import {initTRPC} from "@trpc/server";

const TRPC = initTRPC.create();

export const TRPC_ROUTER = TRPC.router({

    getCard: TRPC.procedure.query(() => {
        return {text: "hello world"};
    })

});

export type TRPC_ROUTER = typeof TRPC_ROUTER;