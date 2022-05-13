import {Router} from 'express';

import {postLogin} from '.././controllers/loginControllers.js';

const loginRouter = Router();

loginRouter.post('/login', postLogin )
console.log("funcionando chefe")

export default loginRouter;