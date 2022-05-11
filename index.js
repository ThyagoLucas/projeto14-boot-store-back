import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import loginRouter from './route/loginRouter.js';

const app = express();


dotenv.config();
app.use(cors());
app.use(json());



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
});



app.use(loginRouter);