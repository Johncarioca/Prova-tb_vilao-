import { con } from './conection.js';

export async function inseirVilao(vilao){
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
     select 
        id_vilao        id, 
        nm_vilao        nome,
        ds_maldades     maldades,
        bt_poderes      poderes
     from tb_vilao2
    `
    const [linhas] = await con.query(comando);

}