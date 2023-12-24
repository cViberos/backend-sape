const {response} = require('express');
const mercadoPago =  require('mercadopago');

mercadoPago.MercadoPagoConfig({
    accessToken: 'TEST-2264483642006042-122018-409f6f7f3bdd7c77b7706a5520e95a9f-1592664139'
});

const createCaja = async(req, res = response ) => {

    const newCaja = req.body;

    const newCaja_data = {
        category: newCaja.category,
        external_id: newCaja.external_id,
        external_store_id: newCaja.external_store_id,
        fixed_amount: true,
        name: newCaja.name,
        store_id: newCaja.store_id
    }

    
}

module.exports = {
    createCaja
}
