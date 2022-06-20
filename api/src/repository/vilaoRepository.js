import { con } from './conection.js';

export async function criarVilao(vilao){
    const comando = 
    `
     insert into tb_vilao2(nm_vilao,ds_maldades,bt_poderes)
        values (?,?,?)
    `
    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.poderes] )
    return resposta;
}

export async function listarVilao(vilao ){

    const comando = 
    `
    `
    const resposta = await con.query(comando);

}