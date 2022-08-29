import {Testimonial} from '../models/Testimoniales.js';
const guardarTestimonial=async (req, res)=>{
    //validar
    const{ nombre,correo,mensaje }=req.body;
    //trim quita los espacios
    const errores=[];

   if(nombre.trim()===""){
       errores.push({mensaje:"El nombre esta vacio"})

   }
    if(correo.trim()===""){
        errores.push({mensaje:"El correo esta vacio"})

    }
    if(mensaje.trim()===""){
        errores.push({mensaje:"El mensaje esta vacio"})

    }
    if(errores.length){
        //Consultar testimoniales
        const testimoniales=await Testimonial.findAll();

        res.render('testimonial',{
            pagina:'Testimonial',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        })
    }else{
        //Almacenar datos
        try{
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        }catch (error){ console.log(error)}


    }


}

export{
    guardarTestimonial
}