const productsController = {
    design: (req,res) => {
        res.render("design")
    },
    services:(req,res) => {
        res.render("design/services")
    },
}


module.exports = productsController