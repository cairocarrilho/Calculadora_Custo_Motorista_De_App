import express from 'express';
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());





const Port = 3000;
app.listen(Port, () => {
    console.log(`Servidor rodando na porta ${Port}`);
});
