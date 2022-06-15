import mysql from 'dotenv/config'

const con  = mysql.createConection({

    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    passoword: process.env.MYSQL_PWD,
    database: process.env.MYSQL_BD,


})

console.log( 'BD CONECTADA !!' );

export { con }
