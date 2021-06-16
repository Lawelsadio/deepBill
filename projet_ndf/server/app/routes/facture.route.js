const express = require('express')
const router = express.Router()
const uploadMulter = require('../middlewares/upload.js')
const validation = require('../middlewares/validation.js')
const {
    createFacture,getOneFacture,getAllFacture,modifyFacture,deleteFacture
} = require('../controllers/facture.controllers')

router.get('/factures', getAllFacture);
router.post('/facture', uploadMulter, validation, createFacture)
router.get('/:id',getOneFacture);
router.put('/:id', modifyFacture);
router.delete('/:id', deleteFacture);
module.exports = router