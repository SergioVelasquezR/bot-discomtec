import dontev from 'dontev';
dontev.config();

export const config = {
    whatsappToken: process.env.WHATSAPP_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN
};