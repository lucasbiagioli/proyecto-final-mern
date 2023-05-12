const PORT = process.env.PORT || 8080
const app = express();
const express = require('express');
const producRoutes = require('./routes/products.routes')
const cors = require('cors');
require('dotenv').config();

//crear el servidor de express


app.use(express.json())


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})

app.get('/', (req, res) => {
    res.send({mensaje: "Hola Humana"})
})

app.use("/productos", )


//escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor en ejecucion en ${process.env.PORT}`)
})
