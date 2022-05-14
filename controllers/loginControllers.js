import db from '../db.js';
import joi from 'joi';

export async function postLogin(req, res) {
    console.log("entrando")
    const { email, password } = req.body;

    const user = {
        email,
        senha
    }

    const userSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().alphanum().required()
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
            sessionStart = await db.collection("sessions").findOne({email: email});
            console.log(sessionStart);
            res.status(200).send(sessionStart.tokenSession);
        } else {
        res.status(404).send("Usuário não encontrado");
        return;
        }
    }
    catch {
        res.status(500).send("Erro no servidor");
    }
}