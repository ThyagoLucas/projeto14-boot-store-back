import Joi from "joi";
import db from "../db";

export async function vRegisterDatas(req, res, next){

    const {name, email, password, passwordConf} = req.body;

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        passwordConf: Joi.string().required().equal(password)
    });

    const thereIsEmail = await db.collection('users').findOne({email:email});
    
    //const verify = schema.validate({name, email, password, passwordConf}).error;
    
    if(thereIsEmail !== null){
        next();
    }else{
        res.status(403).send("email já cadastrado");
    }


    try {
        
        
    } catch (error) {
        
    }

}

export async function vInfoLoginMid (req, res, next){



}