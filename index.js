import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './db.js'
const app = express();


dotenv.config();
app.use(cors());
app.use(json());

app.post("/login", async (req, res) => {
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
        const validateEmail = await db.collection("clients").findOne({email});
        if(validateEmail && bcrypt.compareSync(password, validateEmail.password)){
            await {tokenSession} = await db.collection("sessions").findOne({email});
            res.status(200).send({tokenSession});
        } else {
        res.status(404).send("Usuário não encontrado");
        return;
        }
    }
    catch {
        res.status(500).send("Erro no servidor");
    }

})


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
});


