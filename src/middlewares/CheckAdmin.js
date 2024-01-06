const express = require('express')
const router = express.Router()
const users = ['Ada','Greta', 'Vim', 'Tim']


function checkAdmin(req,res, next){
    const user = req.query.user
    if (users.includes(user)) {
        next();
    } else {
        res.send("No tienes los privilegios para ingresar")
    }
}


module.exports = checkAdmin