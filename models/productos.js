import mongoose from 'mongoose';


const productosCollection= 'productos';

const productosSchema= new mongoose.Schema({
    id:{type: Number,require: true, timestamp:true},
    nombre:{type: String, require:true,max:100},
    descripcion:{type: String, require : true, max:200},
    codigo:{type:Number,require:true},
    foto:{type:String, max:300},
    precio:{type:Number,require:true},
    stock:{type:Number,require :true}
})

export const productosMongo= mongoose.model(productosCollection,productosSchema);