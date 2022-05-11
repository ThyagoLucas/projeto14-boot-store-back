import { Router } from "express";

import { postRegister } from "../controllers/registerControllers.js";
import { vRegisterDatasMid } from "../middlewares/verifiersMiddlerwares.js";

const registerRouter = Router();


registerRouter.post('/register', vRegisterDatasMid, postRegister );


export default registerRouter;

