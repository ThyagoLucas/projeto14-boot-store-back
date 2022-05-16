import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import db from "../db.js";

export async function postCheckout(req, res){

    const date = dayjs().format("DD/MM/YYYY HH:mm:ss");
    const {authorization} = req.headers;
    const items = req.body;

    const token = authorization.replace('Bearer','').trim();

    const user = await db.collection('sessions').findOne({tokenSession: token});
    const dataUser = await db.collection('clients').findOne(ObjectId(user.userId));
    const customerOrder = {email:dataUser.email, name:dataUser.name, date:date, items:items}
     
    const sendedOrder = await db.collection('orders').insertOne(customerOrder);

    const order  = await db.collection('orders').findOne(ObjectId(sendedOrder.insertedId));
    

    try {

        res.status(201).send(order._id);
        

    } catch (error) {
        
    }



    //await db.collection('shopCarts').insertOne({email:email, shopCart:shopCart, date:date});


    

}