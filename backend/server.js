import express from 'express';
// import cors from 'cors';
import {router} from './src/routes/router.js'
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors());
app.use(router);





const Port = 3001;
app.listen(Port, () => {
    console.log(`Servidor rodando na porta http://localhost:3001`);
});
