//Se crea la base de datos
const mongoose = require ('mongoose');

let Schema = mongoose.Schema;

let BaseSchema = new Schema ({
   name : {
       type: String,
       required: [true, 'Se requiere el nombre']},
    style : {
       type: String,
       required:[true, 'Se requiere el estilo']
},
    nationality : {
       type: String
},
    paintings : {
       type: String
}

  });

  module.exports = mongoose.model('Base', BaseSchema);
