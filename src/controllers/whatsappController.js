import { config } from "../config";
import { sendTextMessage } from "../services/whatsappService";

const verifyWebhook = (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === config.verifyToken){
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
};

const processMessage = async (req, res) => {
    const entry = req.body.entry && req.body.entry[0];
    const changes = entry.changes && entry.changes[0];
    const value = changes.value;
    const message = value.messages && value.messages[0];

    if (message) {
    const from = message.from;
    const text = message.text.body;

    console.log(`Mensaje de ${from}: ${text}`);

    await sendTextMessage(from, '¡Hola! 👋 Soy tu bot de WhatsApp.');
  }

  res.sendStatus(200);
};

export { verifyWebhook, processMessage };