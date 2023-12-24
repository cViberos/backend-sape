// =================================================================
//  ROUTER PARA GESTION DE USUARIO
// =================================================================

const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario,login, renewToken } = require('../controllers/ctrl_login');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

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