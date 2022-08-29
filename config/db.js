import Sequelize from 'sequelize';
import dotenv from 'dotenv/config'
//Pasar el nombre de la base de datos
//nombre del usuario
//contraseña
//host
//El numero de puerto

const db =new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS, {
    host:process.env.DB_HOST,
    port:'3306',
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:1000
    },
    operatorAliases:false
});

export default db;