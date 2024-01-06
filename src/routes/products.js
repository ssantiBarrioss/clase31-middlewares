const express = require('express')
const router = express.Router()
const {design,services} = require('../controllers/productsController')


router
.get('/services/design', design)
.get('/services', services)


module.exports = router;