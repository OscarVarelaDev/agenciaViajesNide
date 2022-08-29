import  express from "express";
import { paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje,
} from '../controllers/paginasController.js'
import {guardarTestimonial} from "../controllers/testimonialController.js";

const router =express.Router();
//Definir las rutas 
//req lo que enviamos
//res Lo que expres nos responde
router.get("/",paginaInicio);

router.get("/nosotros",paginaNosotros);

router.get("/viajes",paginaViajes);

router.get("/testimoniales",paginaTestimoniales );
//:viaje es un  comodin para pasar los params o las variables
router.get('/viajes/:slug',paginaDetalleViaje);

router.post('/testimoniales',guardarTestimonial)



export default router;