import db from '../db.js';

export async function getProductsHome(req, res) {
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '').trim();
    if(!token) {
        res.status(401).json({error: 'Token não informado'});
        return
    }

    try {

        const produtos = await db.collection('products').find({}).toArray();
        res.status(200).json(produtos);
    }
    catch {
        res.status(500).json({error: 'Erro ao buscar produtos'});
        console.log("deu erro amigão")
    }
}