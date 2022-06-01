const express = require('express')
const { controladoresApi } = require('../controllers/controladoresApi.js')
const { controladoresWeb } = require('../controllers/controladoresWeb.js')
const { controladoresSocket } = require('../controllers/controladoresSocket.js')
const webRouter = express.Router()

webRouter.get('/', controladoresWeb.root)
webRouter.get('/index', controladoresWeb.index)
// webRouter.get('/index', controladoresSocket.getMensajes)

webRouter.get('/api/productos', controladoresApi.getAll)
webRouter.post('/api/productos/', controladoresApi.create)
webRouter.get('/api/productos/:id', controladoresApi.getOne)
webRouter.put('/api/productos/:id', controladoresApi.update)
webRouter.delete('/api/productos/:id', controladoresApi.delete)


module.exports = { webRouter }