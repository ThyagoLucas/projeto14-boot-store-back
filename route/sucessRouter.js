import {Router} from 'express';
import { getOrder } from '../controllers/sucessController.js';


const sucessRouter = Router();

sucessRouter.post("/sucess", getOrder);

export default sucessRouter;