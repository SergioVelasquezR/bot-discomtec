import dotenv from 'dotenv';
dotenv.config();

export const config = {
    whatsappToken: process.env.WHATSAPP_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN
};