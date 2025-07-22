import express from 'express';
import { verifyWebhook, processMessage } from '../controllers/whatsappController.js';

const router = express.Router();

router.get('/webhook', verifyWebhook);
router.post('/webhook', processMessage);

export default router;