import express from 'express';
import cors from 'cors';
import { config } from './config/config';
import router from './routes';
import { globalErrorHandler } from '@/middlewares/global-error-handler';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(globalErrorHandler);

app.listen(config.port, () => {
  console.log(`🌐 Server running on http://localhost:${config.port}`);
});

app.get('/', (req, res) => {
  res.send('Working...');
});
