import express from 'express';

import { router } from './routes/index.js';

const PORT = 3334;

const app = express();
app.use(express.json());
app.use(router);

// app.use(express.json());
console.log('server.js');

export { app };

app.listen(PORT, () => console.log(`🚀 Server is runnin in port ${PORT}!`));
