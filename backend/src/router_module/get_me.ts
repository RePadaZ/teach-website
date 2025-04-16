import {TRPC} from "../trpc/init_trpc";
import lodashPick from "lodash/pick";

// Запрос данных для того чтоб узнать авторизирован ли пользователь
export const GetMe = TRPC.procedure.query(async ({ctx}) => {
    return {me: ctx.me && lodashPick(ctx.me, ['id', 'login'])}
});