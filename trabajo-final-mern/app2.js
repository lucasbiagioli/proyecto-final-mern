const express = require('express');

const app = express();
const PORT = 8080

const productos = [
    {
        "id": "1",
        "nombre": "Coca Cola",
        "precio": 100,
        "stock": 10
    },
    {
        "id": "2",
        "nombre": "Pepsi",
        "precio": 100,
        "stock": 10,
    },
    {
        "id": "3",
        "nombre": "Fanta",
        "precio": 100,
        "stock": 10
    },
    {
        "id": "4",
        "nombre": "Sprite",
        "precio": 100,
        "stock": 10,
    },
    
]
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})

app.get('/', (req, res) => {
    res.send({mensaje: "Hola Humana"})
})


app.get('/productos', (req, res) => {
    res.send(productos)
})

app.get('/productos/:id', (req, res)=>{
    let id = req.params.id
    let producto = productos.find( producto=> producto.id == id )
    if(producto){
        res.send(producto)
        }else{
            res.send({
                error: "No hay producto con ese id"
            })
    }
})

app.put('/productos/:id', (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id)
    producto.nombre = req.body.nombre;
    producto.precio = req.body.precio;
    producto.stock = req.body.stock;
    res.send({producto, mensaje:"Producto Modificado con Exito"})
})

app.post("/productos", (req, res)=>{
    const nuevoProducto = {
        id: productos.length +1,
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }

    productos.push(nuevoProducto)
    res.send({producto: nuevoProducto, mensaje:"Producto Creado con Exito"})
})

app.get('/login', (req, res) => {
    res.send({ mensaje: "Estoy Logeado" })
})

app.put('/producto', (req, res) => {
    res.send({ mensaje: "Editando producto" })
})
