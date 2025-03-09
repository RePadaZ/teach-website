import {z} from "zod";
import {TRPC} from "../trpc/init_trpc";
import {TRPCError} from "@trpc/server";
import {cryptoPassword, SignJWT} from "../public_model/utils";

const userSchema = z.object({
    login: z.string()
        .min(1, "Name is required")
        .max(100, "Name is too long")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
        .trim(),
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "password must be at least 8 characters long"),
    agreeTerms: z.boolean().refine(() => true),
});

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
                message: "User with this login already exists.",
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
                message: "User with this email already exists.",
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
            message: "Failed to submit the form. Please try again later.",
        });
    }
});
