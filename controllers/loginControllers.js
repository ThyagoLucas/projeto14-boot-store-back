// TODO ARRUMAR PARA MIDDLEWARE

import db from '../db.js';
import joi from 'joi';
import bcrypt from 'bcrypt';
import {v4} from 'uuid';
import dayjs from 'dayjs';


export async function postLogin(req, res) {
    console.log("entrando")
    const { email, password } = req.body;
    const date = dayjs().format("DD/MM/YYYY HH:mm:ss");

    const user = {
        email,
        password
    }

    const userSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });

    const validateUser = userSchema.validate(user, {abortEarly: false});

    if(validateUser.error){
        res.status(422).send(validateUser.error.details.map(description => description.message));
        return;
    }

    try{
        const validateEmail = await db.collection("clients").findOne({email:email});
        console.log(validateEmail);
        if(validateEmail && bcrypt.compareSync(password, validateEmail.password)){
            const tokenSession = v4();
            await db.collection("sessions").insertOne({userId:validateEmail._id, tokenSession:tokenSession, date:date, isAvailable:true});
            const session = await db.collection("sessions").findOne({tokenSession:tokenSession});
            res.status(200).send(session);
        } else {
        res.status(404).send("Usuário não encontrado");
        return;
        }
    }
    catch {
        res.status(500).send("Erro no servidor");
    }


}