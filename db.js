import { MongoClient } from "mongodb";

import dotenv from 'dotenv';

dotenv.config();

let db = null;

const mongoClient = new MongoClient(process.env.MONGO_URL);
try {
    await mongoClient.connect();
    db = mongoClient.db(`${process.env.DATA_BASE}`);
    console.log('Conexão ao banco de dados estabelecida');    
} catch (erro) {
    console.log('Erro ao se conectar ao db: ',erro)
}

export default db;