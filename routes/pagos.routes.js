// =================================================================
//  ROUTER PARA MERCADO PAGO
// =================================================================

const { Router } = require('express');
const {createOrder} = require('../controllers/ctrl_pagos');
const router = Router();

// CREAR ORDEN DE COMPRA
router.get('/create-order', createOrder);

// USUARIO ACEPTO EL PAGO
router.get('/success', (req,res) => res.send('creating order'));

// VERIFICACIÔN DEL PAGO
router.get('/webhook', (req, res) => res.send('webhook'));


module.exports = router;