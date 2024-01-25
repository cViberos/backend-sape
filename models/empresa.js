const { Schema, model } = require('mongoose');

const EmpresaSchema = Schema({
  empresa: {
    type: String,
    required:true
  },
  nombre: {
    type: String,
    required:true
  },
  apellido: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  phone:{
    type: String,
    require: false
  },
  webpage: {
    type: String,
    required: false,
    unique: true
  },
});

// Personalización del metodo de salida
EmpresaSchema.method('toJSON', function() {
  // Indicamos todas las propiedades que no queremos que aparezcan, luego
  // ...object , indicamos que el resto de propiedades que tenga el objeto se almacena en object
  const {__v, _id, ...object } = this.toObject();
  // Creamos una propiedad y le asignamos el valor _id
  object.uid = _id;
  // devolvemos el objeto resultante
  return object;
});

module.exports = model('empresa', EmpresaSchema);
