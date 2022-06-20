import {  Router } from "express";
import { inseirVilao } from "../repository/vilaoRepository";

const server = Router();

server.post('/vilao', async (req,resp)  => {
    try {
        const { vilao } = req.body
        const reposta = await inseirVilao(vilao);
        resp.send({ lista: reposta})
    } 
    catch (err) {
        resp.status(406).send({ erro: err.message  })
    }


})

export default server;

