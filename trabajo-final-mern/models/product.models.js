const {Schema, model} = require('mongoose');

const productSchema = new Schema ({
    npmbre: {
        type: String,
        required: true
        },
    precio : {
        type: Number,
        required: true
        },
    stock : {
        type: Number,
        required: true
        },
    }
);

module.exports = model('Producto', productSchema)