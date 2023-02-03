import express, { Application } from 'express';
import log from './tools';
import databaseConnect from './databases/connectDatabase';
import cors from 'cors';
import router from './routers';
import customErrorHandler from './helpers/errors/customErrorHandler';
import dotenv from 'dotenv';
import { toNumber } from 'lodash';
import helmet from 'helmet';
import compression from 'compression';

const app: Application = express();

dotenv.config({});

databaseConnect();

const PORT = toNumber(process.env.PORT) as number;

const corsOptions = {
  origin: [
    'https://notes-to-myself-frontend.vercel.app',
    'http://localhost:3000',
  ],
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
};

app.use(helmet());
app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(customErrorHandler);

app.listen(PORT, () => log.info(`Server running ${process.env.URL}`));
