/**
 * path: /api/users
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario,login, renewToken, allUsuarios } = require('../controllers/ctrl_login');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// PRUEBA DE USUARIOS
reouter.get( '/test',[],allUsuarios);


// NUEVO USUARIO
router.post( '/new', [
  // Middlewars como validación de seguridad
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  check('password','La contraseña es obligatoria').not().isEmpty(),
  check('email','El email es obligatorio').isEmail(),
  validarCampos
] ,crearUsuario);

// LOGIN
router.post( '/login', [
  check('password','La contraseña es obligatoria').not().isEmpty(),
  check('email','El email es obligatorio').isEmail()
] ,login);

// RENOVAR JWT
router.get( '/renew', validarJWT, renewToken);


module.exports = router;