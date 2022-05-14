import {Router} from 'express';

import {postLogin} from '.././controllers/loginControllers.js';

const loginRouter = Router();

loginRouter.post('/login', postLogin )



export default loginRouter;