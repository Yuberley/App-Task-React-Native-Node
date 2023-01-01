import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import taskRoutes from './routes/task';

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";

const app = express();
const specs = swaggerJSDoc(options);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;