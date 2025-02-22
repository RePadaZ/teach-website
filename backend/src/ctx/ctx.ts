import {PrismaClient} from "@prisma/client"

// Создание prisma клиет и функции её остановки
export const CreateAppContext = () => {
    const prisma = new PrismaClient()
    return {
        prisma,
        stop: async () => {
            await prisma.$disconnect()
        },
    }
}

// Импорт тип AppContext
export type AppContext = ReturnType<typeof CreateAppContext>