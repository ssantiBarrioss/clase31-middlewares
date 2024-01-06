const express = require('express')
const router = express.Router()
const users = ['ada','greta', 'vim', 'tim']


function checkAdmin(req,res, next){
    const user = req.query.user
    const userMin= user.toLowerCase()
    if (users.includes(userMin)) {
        next();
    } else {
        res.send("No tienes los privilegios para ingresar")
    }
}


module.exports = checkAdmin