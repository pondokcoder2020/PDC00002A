import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import formidableMiddleware from 'express-formidable';
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(formidableMiddleware());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;
