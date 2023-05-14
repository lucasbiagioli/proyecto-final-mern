const express = require('express');
const app = express();
require('dotenv').config();
const productRoutes = require('./routes/products.routes')
const PORT = process.env.PORT || 8080
const cors = require('cors');
const initDBConnection  = require('./src/database/dbConnection');


//crear el servidor de express

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send({mensaje: "Hola Humana"})
})
app.use("/productos", productRoutes)



//escuchar peticiones
app.listen(PORT, () => {
    initDBConnection;
    console.log(`Escuchando en el puerto ${PORT}`)
})
