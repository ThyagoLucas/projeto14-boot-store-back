import {Router} from 'express';

const loginRouter = Router();
import {postLogin} from '.././controllers/loginControllers.js';

loginRouter.post('/login', postLogin )
console.log("funcionando chefe")

export default loginRouter;