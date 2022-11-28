import express from 'express';
import cors from 'cors';
import { router } from './routes/index.js';

const PORT = 3335;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

// app.use(express.json());
console.log('server.js');

export { app };

app.listen(PORT, () => console.log(`🚀 Server is runnin in port ${PORT}!`));
