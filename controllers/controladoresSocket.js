const { databaseMensajes } = require("../database/databaseMensajes.js")


const controladoresSocket = {

    getMensajes: (req, res) => {
        const mensajesN = databaseMensajes.getAll()
        const mensajes = {
            mensajesN,
            hayMensajes: Boolean(mensajesN.length > 0),
        }


        res.render('mensajes', mensajes);
    }
}

module.exports = { controladoresSocket }