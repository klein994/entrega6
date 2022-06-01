const { databaseProductos } = require("../database/databaseProductos.js")


const controladoresWeb = {
    root: (req, res) => {
        res.redirect('/index');
    },

    index: (req, res) => {
        const productosN = databaseProductos.getAll()

        const datos = {
            productosN,
            hayProductos: Boolean(productosN.length > 0),
        }


        res.render('datos', datos);
    }
}

module.exports = { controladoresWeb }