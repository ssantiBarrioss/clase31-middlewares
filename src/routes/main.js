const express = require('express')
const router = express.Router()
const {home} = require("../controllers/mainController")


router
.get('/', home)

module.exports = router;