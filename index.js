import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



console.log(process.env.DB_HOST)

const app = express();

//Conectar la base de datos

db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error=>console.log(error));

//Definir puerto
const port = process.env.PORT || 3000;
//Escuchar el puerto
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
//Habilitar Pug
app.set('view engine', 'pug');

//Obtener el año actual
//next pasar siguiente midelware
app.use((req, res, next) => {
    //Pasar valores a el frontend
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio =  "Agencia de viajes"
     next();

})
//Agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Agregar Router
app.use('/', router);
;
//Definir la carpeta
app.use(express.static('public'))