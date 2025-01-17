import express from 'express';

const app = express();
app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT,  () => {
    console.log(`App listening on port ${SERVER_PORT}`);

});