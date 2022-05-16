import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import loginRouter from './route/loginRouter.js';
import registerRouter from './route/registerRouter.js';
import itemRouter from './route/itemRouter.js';
import homeRouter from './route/homeRouter.js';
import checkoutRouter from './route/checkoutRouter.js';
import sucessRouter from './route/sucessRouter.js';


const app = express();

dotenv.config();
app.use(cors());
app.use(json());

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
});

//Routers

app.use(registerRouter);    
app.use(loginRouter);
app.use(itemRouter);
app.use(homeRouter);
app.use(checkoutRouter);
app.use(sucessRouter);


