import express from 'express';
import mainRouter from './src/index.js'
import { globalErrorHandler } from './validations/handleValidationErrors.js'
import cors from 'cors';

const app = express();
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(mainRouter);
app.use(globalErrorHandler);

app.listen(SERVER_PORT,  () => {
    console.log(`App listening on port ${SERVER_PORT}`);

});