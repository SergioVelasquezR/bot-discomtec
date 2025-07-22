import express from 'express';
import whatsappRoutes from './routes/whatsappRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', whatsappRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});