import Joi from "joi";
import db from "../db.js";

export async function vRegisterDatasMid(req, res, next){

    const {name, email, password, passwordConf} = req.body;

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        passwordConf: Joi.string().required().equal(password)
    });
    const verify = schema.validate({name, email, password, passwordConf}).error;

    if(verify !== undefined){
        console.log("erros nos dados: ")
        return res.status(403).send(verify);
    }

   
    try {
        
        const thereIsEmail = await db.collection('clients').findOne({email:email});
        console.log("antes do null")
        if(thereIsEmail !== null){
            console.log("Dentro do null ")
            res.status(403).send("email já cadastrado");
        }else{
            console.log("Dentro do next: ")
            next()
        }
   
    } catch (error) {
        console.log('Falha no middler vRegisterDatas: ',error);
    }  

}

