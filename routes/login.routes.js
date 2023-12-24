// =================================================================
//  ROUTER PARA GESTION DE USUARIO
// =================================================================

const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario,login, renewToken } = require('../controllers/ctrl_login');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

<<<<<<< HEAD:routes/login.routes.js
=======
// NUEVO USUARIO
router.post( '/new', [
  // Middlewars como validación de seguridad
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  check('password','La contraseña es obligatoria').not().isEmpty(),
  check('email','El email es obligatorio').isEmail(),
  check('rol','Definir el rol es necesario').not().isEmpty(),
  validarCampos
] ,crearUsuario);

>>>>>>> d6b573d9d8407ca2d730563cc9135a882a956d7c:routes/routes.js
// LOGIN
router.post( '/login', [
  check('password','La contraseña es obligatoria').not().isEmpty(),
  check('email','El email es obligatorio').isEmail()
] ,login);

// RENOVAR JWT
router.get( '/renew', validarJWT, renewToken);

// NUEVO USUARIO
router.post( '/new', [
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  check('password','La contraseña es obligatoria').not().isEmpty(),
  check('email','El email es obligatorio').isEmail(),
  validarCampos
] ,crearUsuario);


module.exports = router;