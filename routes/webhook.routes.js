const {Router} = require('express');
const {PagarProducto} = require("../controllers/ctrl_webhooks");
const router = Router();
router.post('/notificacion',PagarProducto);

module.exports = router