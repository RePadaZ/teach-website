import { z } from "zod";
import {TRPC} from "../trpc/InitTRPC";

const contactSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().min(1).max(500),
});

export const CreateContactForm = TRPC.procedure.input(contactSchema).mutation(async ({ input }) => {
    // Здесь можно обработать форму, например, отправить email или сохранить в базу
    console.log("Received contact form:", input);

    return true;
});