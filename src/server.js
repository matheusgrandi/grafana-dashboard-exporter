import express from 'express';
import { router } from './routes/index.js';

const PORT = 3334;

const app = express();
app.use(router);

app.listen(PORT, () => console.log(`🚀 Server is runnin in port ${PORT}!`));
