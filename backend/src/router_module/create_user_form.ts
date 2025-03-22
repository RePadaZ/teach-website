import {z} from "zod";
import {TRPC} from "../trpc/init_trpc";
import {TRPCError} from "@trpc/server";
import {cryptoPassword, SignJWT} from "../util_module/utils";

// Валидация данных на бэкенде
const userSchema = z.object({
    login: z.string()
        .min(1, "Логин не может быть пустым.")
        .max(100, "Логин слишком длинный.")
        .regex(/^[a-zA-Z\s]+$/, "Логин может содержать только буквы и пробелы.")
        .trim(),
    email: z.string().email("Неверный формат электронной почты."),
    password: z.string().min(8, "Пароль должен быть не менее 8 символов длиной."),
    agreeTerms: z.boolean().refine(() => true),
});

// Функция для регистрации пользователя и создания его в базе
export const CreateUserForm = TRPC.procedure.input(userSchema).mutation(async ({input, ctx}) => {
    try {
        // Проверяем, существует ли пользователь с таким логином
        let exUser = await ctx.prisma.user.findFirst({
            where: {
                login: input.login,
            },
        });

        if (exUser) {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Данный логин занят.",
            });
        }

        // Проверяем, существует ли пользователь с такой почтой
        exUser = await ctx.prisma.user.findFirst({
            where: {
                email: input.email,
            },
        });

        if (exUser) {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Пользователь с такой электронной почтой уже существует.",
            });
        }

        // Создаём пользователя
        const newUser = await ctx.prisma.user.create({
            data: {
                login: input.login,
                email: input.email,
                password: cryptoPassword(input.password),
            },
        });

        const token = SignJWT(newUser.id)
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
