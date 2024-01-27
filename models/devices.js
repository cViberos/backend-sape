const { Schema, model } = require('mongoose');

const DeviceSchema = Schema({
  platformtype: {
    type: String,
    required: false
  },
  deviceId: {
    type: String,
    required:true,
    unique: true
  },
  estado: {
    type: Boolean,
    required:true
  },
});

// Personalización del metodo de salida
DeviceSchema.method('toJSON', function() {
  // Indicamos todas las propiedades que no queremos que aparezcan, luego
  // ...object , indicamos que el resto de propiedades que tenga el objeto se almacena en object
  const {__v, _id, ...object } = this.toObject();
  // Creamos una propiedad y le asignamos el valor _id
  object.uid = _id;
  // devolvemos el objeto resultante
  return object;
});

module.exports = model('divice', DeviceSchema);
