import { Router } from 'express';

import { getProductsHome } from '.././controllers/homeControllers.js';

const homeRouter = Router();

homeRouter.get('/', getProductsHome);

export default homeRouter;