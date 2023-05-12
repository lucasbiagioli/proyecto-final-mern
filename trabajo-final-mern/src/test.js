function obtenerProducto(nombre, precio){
    const nuevoProducto = {
        nombreProducto: nombre,
        precioProducto: precio
    }
    return nuevoProducto;
}

const p1 = crearProducto("gaseosa", 200)

p1.nombreProducto
p1.precioProducto

const p4 = crearProducto(200, "gaseosa")

p4.nombreProducto
p4.precioProducto