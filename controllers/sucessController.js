import { ObjectId } from "mongodb";
import db from "../db.js";

export async function getOrder( req, res ){


    const  {idPedido}  = req.body;

    const resumeOrder = await db.collection('orders').findOne({_id:ObjectId(idPedido)})


    res.status(201).send(resumeOrder)

}