const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
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
    required: true,
    unique: true
  },
  rol: {
    type: Int16Array,
    required: true
  },
  phone:{
    type: String,
    require: false
  },
  password: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    default: false
  },
});

// Personalización del metodo de salida
UsuarioSchema.method('toJSON', function() {
  // Indicamos todas las propiedades que no queremos que aparezcan, luego
  // ...object , indicamos que el resto de propiedades que tenga el objeto se almacena en object
  const {id, password, ...object } = this.toObject();
  // Creamos una propiedad y le asignamos el valor _id
  object.uid = id;
  // devolvemos el objeto resultante
  return object;
});

module.exports = model('Usuario', UsuarioSchema);
