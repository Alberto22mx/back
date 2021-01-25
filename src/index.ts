import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import { createConnection } from 'typeorm';

const app = express();
createConnection();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(indexRoutes);

app.listen(3000);
console.log('Server on port: ', 3000);