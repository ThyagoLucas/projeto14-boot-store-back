import { Router } from "express";

import { postRegister } from "../controllers/registerControllers.js";

const registerRouter = Router();



registerRouter.post('/register', postRegister );
console.log("entrou no router de register")

export default registerRouter;

