require('dotenv').config();
const database = {
    default : process.env.DATABASE || 'mysql' ,
    mysql : {
        host : 'localhost',
		user : 'root',
		password : '',
        database : 'connexion',
        connectionLimit : 50,
    }
}

module.exports = database;