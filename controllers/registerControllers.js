import dayjs from 'dayjs';
import db from '../db.js'
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';


export async function postRegister (req, res){

    const date = dayjs().format("DD/MM/YYYY HH:mm:ss");
    const {name, email, password} = req.body;
    const passCryp = bcrypt.hashSync(password, 10);

    try {
        const tokenSession = v4();
        await db.collection('clients').insertOne({date:date, name:name, email:email, password:passCryp});
        const userFinded =  await db.collection('clients').findOne({email:email});
        await db.collection('sessions').insertOne({userId:userFinded._id, tokenSession:tokenSession, date:date, isAvailable:true});
        const session = await db.collection('sessions').findOne({tokenSession:tokenSession});
        
        res.status(201).send(session);

    } catch (error) {
        console.log('Falha ao registrar user no db: registerController',error)
    }

}

