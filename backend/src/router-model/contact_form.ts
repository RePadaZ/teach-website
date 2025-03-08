import {TRPC} from "../trpc/init_trpc";
import {z} from "zod";

// Валидация формы с использованием zod
const contactSchema = z.object({
    name: z.string()
        .min(1, "Name is required")
        .max(100, "Name is too long")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
        .trim(),
    email: z.string().email("Invalid email format"),
    phone: z.string()
        .optional() // phone может быть undefined
        .refine((val) => !val || val.length <= 20, {
            message: "Phone number is too long",
        })
        .refine((val) => !val || /^\+?\d{7,20}$/.test(val), {
            message: "Invalid phone number format",
        }),
    message: z.string()
        .min(1, "Message cannot be empty")
        .max(500, "Message is too long")
        .trim(),
});

export const CreateContactForm = TRPC.procedure.input(contactSchema).mutation(async ({input, ctx}) => {
    try {
        await ctx.prisma.contactInfo.create({
            data: input,
        })
        return {success: true};
    } catch (err) {
        console.error(err);
        throw new Error("Failed to submit the form. Please try again later.");
    }
});
