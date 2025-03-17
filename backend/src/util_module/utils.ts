import * as crypto from "node:crypto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Получение данных из env файла
export const config = {
    JWT_SECRET: process.env.JWT_SECRET || "",
    PASSWORD_SALT: process.env.PASSWORD_SALT || "",
};

// Функция для шифрования пароля
export function cryptoPassword(password: string): string {
    return crypto.createHash("md5").update(`${config.PASSWORD_SALT}${password}`).digest("hex");
}

// Функция для генерация jwt токена
export function SignJWT(userID: string): string {
    return jwt.sign(userID, config.JWT_SECRET);
}