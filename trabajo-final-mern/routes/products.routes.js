const Router = require('express')
const router = Router()

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

router.get('/', (req, res) => {
    res.send(productos)
})

router.get('/:id', (req, res)=>{
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

router.put('/:id', (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id)
    producto.nombre = req.body.nombre;
    producto.precio = req.body.precio;
    producto.stock = req.body.stock;
    res.send({producto, mensaje:"Producto Modificado con Exito"})
})

router.post("/", (req, res)=>{
    const nuevoProducto = {
        id: productos.length +1,
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }

    productos.push(nuevoProducto)
    res.send({producto: nuevoProducto, mensaje:"Producto Creado con Exito"})
})

router.delete("/:id", (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id)
    let index = productos.indexOf(producto)
    productos.splice(index, 1)
    res.send({producto, mensaje:"Producto Eliminado con Exito"})
})


router.put('/', (req, res) => {
    res.send({ mensaje: "Editando producto" })
})

module.exports(router);
