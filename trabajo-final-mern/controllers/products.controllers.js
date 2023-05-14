
const getProdcuts = (req, res) => {
    res.send(productos)

}
const productos = [
    {
        id: "1",
        nombre: "Coca Cola",
        precio: 100,
        stock: 10
    },
    {
        id: "2",
        nombre: "Pepsi",
        precio: 100,
        stock: 10,
    },
    {
        id: "3",
        nombre: "Fanta",
        precio: 100,
        stock: 10
    },
    {
        "id": "4",
        "nombre": "Sprite",
        "precio": 100,
        "stock": 10,
    },
    
]

const getProductsById = (req, res)=>{
    let id = req.params.id
    let producto = productos.find( producto=> producto.id == id )
    if(producto){
        res.send(producto)
        }else{
            res.send({
                error: "No hay producto con ese id"
            })
    }
}

const editProduct = (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id)
    producto.nombre = req.body.nombre;
    producto.precio = req.body.precio;
    producto.stock = req.body.stock;
    res.send({producto, mensaje:"Producto Modificado con Exito"})
}

const createProduct = (req, res)=>{
    const nuevoProducto = {
        id: productos.length +1,
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }
    productos.push(nuevoProducto)
    res.send({producto: nuevoProducto, mensaje:"Producto Creado con Exito"})
}

const deleteProduct = (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id)
    let index = productos.indexOf(producto)
    productos.splice(index, 1)
    res.send({producto, mensaje:"Producto Eliminado con Exito"})
}

module.exports = {
    getProdcuts,
    getProductsById,
    editProduct,
    createProduct,
    deleteProduct
}
