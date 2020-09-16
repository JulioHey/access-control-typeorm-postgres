import express from 'express';

import "./database";

import {router} from './routes';
import "reflect-metadata";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
    console.log("Running on port 3333")
});