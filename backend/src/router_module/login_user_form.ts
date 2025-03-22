import {z} from "zod";
import {TRPC} from "../trpc/init_trpc";
import {TRPCError} from "@trpc/server";
import {cryptoPassword, SignJWT} from "../util_module/utils";

// Валидация данных на бэке
const userSchema = z.object({
    login: z.string()
        .min(1, "Логин не может быть пустым.")
        .max(100, "Логин слишком длинный.")
        .regex(/^(?!\s*$)/, "Логин может содержать только буквы и пробелы.")
        .trim(),
    password: z.string().min(8, "Пароль должен быть не менее 8 символов длиной."),
});

// Вход пользователя на наш сайт
export const LoginUserForm = TRPC.procedure.input(userSchema).mutation(async ({input, ctx}) => {
    try {
        // Проверяем, существует ли пользователь с таким логином
        const exUser = await ctx.prisma.user.findFirst({
            where: {
                login: input.login,
            },
        });

        if (!exUser) {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Пользователь с такими данными не является зарегистрированным или введены не верные данные.",
            });
        }

        if (exUser.password != cryptoPassword(input.password)) {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Пользователь с такими данными не является зарегистрированным или введены не верные данные.",
            });
        }

        const token = SignJWT(exUser.id)
        return {token};

    } catch (err) {

        if (err instanceof TRPCError) {
            throw err; // Если это уже TRPCError, просто пробрасываем её дальше
        }

        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Не удалось отправить форму. Пожалуйста, попробуйте еще раз позже.",
        });
    }
});