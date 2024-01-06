const express = require('express')
const router = express.Router()
const {index, logueado} = require("../controllers/mainController")

 const checkAdmin = require('../middlewares/CheckAdmin')

router
.get('/', index)
.get('/admin', checkAdmin, logueado)

module.exports = router;