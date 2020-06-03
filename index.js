//Dependencias 
const express = require('express');
const hbs = require ('hbs');
const mongoose = require ('mongoose');
//Constante con valor del puerto 
const PUERTO = process.env.PORT || 3000;
 let rutas = require('./rutas');

 const app = express();
 app.set('view engine', 'hbs');
 hbs.registerPartial(directory__dirname + '/views/partials');

 app.use(express.static(__dirname + '/public'));

 app.use('/', rutas);

 mongoose.Promise = global.Promise;
 const cadena = 'mongodb+srv://GigdemP:cbtis122@cluster0-cpr6i.mongodb.net/Examen';
 mongoose.connect(cadena, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('CONEXION ESTABLECIDA');
    }).catch(err=> console.log(err));

    app.listen(PUERTO, ()=>{
        console.log(' ESCUCHANDO EL PUERTO');
    });
