const express = require('express');
const {Router} =express;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*****************ROUTERS*****************/
const routerProductos= Router();
//const routerCarrito = Router();

/******************Productos***************/
routerProductos.get('/', (req,res)=>{

    
   

});
routerProductos.get('/:id', ()=>{

});
/*routerProductos.post();
routerProductos.put();
routerProductos.delete();


*/



const PORT= 8080 || process.env.PORT
app.listen(PORT,()=> {
    console.log(`server listening port ${PORT}`)
})


