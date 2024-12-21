import {initTRPC} from "@trpc/server";

const TRPC = initTRPC.create();

export const TRPC_ROUTER = TRPC.router({

    getCard: TRPC.procedure.query(() => {
        return {text: "hello world"};
    })

});
