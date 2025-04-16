import {TRPC} from "../trpc/init_trpc";
import {z} from "zod";

// Валидация формы с использованием zod
const contactSchema = z.object({
    name: z.string()
        .min(1, "Имя не может быть пустым")
        .max(100, "Имя слишком длинное")
        .regex(/^[a-zA-Z\s]+$/, "Имя может содержать только буквы и пробелы")
        .trim(),
    email: z.string().email("Неверный формат электронной почты"),
    phone: z.string()
        .optional() // phone может быть undefined
        .refine((val) => !val || val.length <= 20, {
            message: "Номер телефона слишком длинный",
        })
        .refine((val) => !val || /^\+?\d{7,20}$/.test(val), {
            message: "Неверный формат номера телефона",
        }),
    message: z.string()
        .min(1, "Сообщение не может быть пустым")
        .max(500, "Сообщение слишком длинное")
        .trim(),
});

// Функция создание записи данных в БД для обратной связи
export const CreateContactForm = TRPC.procedure.input(contactSchema).mutation(async ({input, ctx}) => {
    try {
        await ctx.prisma.contactInfo.create({
            data: input,
        })
        return {success: true};
    } catch (err) {
        console.error(err);
        throw new Error("Не удалось отправить форму. Пожалуйста, попробуйте еще раз позже.");
    }
});
