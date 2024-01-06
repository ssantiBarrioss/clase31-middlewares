const mainController = {
    index: (req,res) => {
        res.render("index", {title: "Home"})
    },
    logueado: (req,res) =>{
        const user = req.query.user;
        res.send(`Hola Admin: ${user}`)
    }
}

module.exports = mainController