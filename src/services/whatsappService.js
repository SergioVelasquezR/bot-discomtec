import axios from "axios";
import { config } from "../config.js";

async function sendTextMessage(to, text) {
    const data = {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: {
            body: text
        }
    };

    try{
        await axios.post(
            `https://graph.facebook.com/v19.0/${process.env.PHONE_NUMBER_ID}/messages`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${config.whatsappToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.log("Error sending message: ", error.response.data);
    }
}

export { sendTextMessage };