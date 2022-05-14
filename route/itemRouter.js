import { Router } from "express";
import { getItem } from "../controllers/itemController.js";


const itemRouter = Router();

itemRouter.get("/item", getItem);


export default itemRouter;