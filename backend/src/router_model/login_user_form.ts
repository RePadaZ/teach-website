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
    password: z.string().min(8, "password must be at least 8 characters long"),
});

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
                message: "This user is not registered or incorrect data has been entered.",
            });
        }

        if (exUser.password != cryptoPassword(input.password)) {
            throw new TRPCError({
                code: "CONFLICT",
                message: "This user is not registered or incorrect data has been entered.",
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
            message: "Failed to submit the form. Please try again later.",
        });
    }
});