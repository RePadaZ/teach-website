import * as crypto from "node:crypto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const config = {
    JWT_SECRET: process.env.JWT_SECRET || "",
};

// Функция для шифрования пароля
export function cryptoPassword(password: string): string {
    return crypto.createHash("md5").update(password).digest("hex");
}

export function SignJWT(userID: string): string {
    return jwt.sign(userID, config.JWT_SECRET);
}