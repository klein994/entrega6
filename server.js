const express = require('express')
const { webRouter } = require('./router/webRouter.js')
const { engine } = require('express-handlebars')
const bodyParser = require("body-parser")
const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')


const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)
app.use(express.json())
app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(webRouter)
io.on('connection', socket => eventoCnxController(socket, io))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})