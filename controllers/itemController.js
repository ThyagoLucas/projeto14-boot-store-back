import { ObjectId } from "mongodb";
import db from "../db.js";

export async function getItem(req, res){

    const {authorization} = req.headers;
    const item = authorization.replace('Bearer','').trim();

    try {
        const seachedItem = await db.collection('products').findOne({_id: ObjectId(item)}); 
        res.status(201).send(seachedItem);
    } catch (error) {
        res.status(403).send('não foi possivel encontrar o item');
    }
}