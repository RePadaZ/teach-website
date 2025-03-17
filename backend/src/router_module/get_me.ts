import {TRPC} from "../trpc/init_trpc";
import lodashPick from "lodash/pick";


export const GetMe = TRPC.procedure.query(async ({ctx}) => {
    return {me: ctx.me && lodashPick(ctx.me, ['id', 'login'])}
});