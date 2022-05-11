import dayjs from 'dayjs';
import db from '../db.js'


export async function postRegister (req, res){

    const {name, email, password, passwordConf} = req.body;

    const date = dayjs().format("DD/MM/YYYY HH:mm:ss");

    console.log(date);

    console.log('InfoUsers: ', name, email, password, passwordConf);


    res.sendStatus(201)

}

