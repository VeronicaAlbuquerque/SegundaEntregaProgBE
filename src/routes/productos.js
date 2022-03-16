import {Router} from 'express';

const productos = process.env.DB==="mongo"? require('../daos/productos/productosDaoMongo'): require('../daos/productos/productosDaoArchivo')

const productosApiRouter= new Router();

/***********endpoints Productos************/
productosApiRouter.get('/api/productos', (req,res)=>{
    productos.listar()

})
productosApiRouter.get('/api/productos/:id',(req,res)=>{

})
productosApiRouter.post('/api/productos/', (req,res)=>{

})
productosApiRouter.put('/:id',(req,res)=>{

})
productosApiRouter.delete('/:id',(req,res)=>{

});

export default productosApiRouter
