import ProductoService from "./ProductoServicios.js";
import Producto from "./Producto.js";

const prodService = new ProductoService();

 async function altaProducto(){
    let nom = document.getElementById("txtNombre").value; 
    let precio = document.getElementById("txtPrecio").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let titulo = document.getElementById("txtTitulo").value;
    let imagenes = document.getElementById("txtImagenes").value;
    let idGuardado = document.getElementById("btnAgregar").dataset.id;
    if(idGuardado == null){
    await prodService.agregarProducto(new Producto(idGuardado,nom, precio, descripcion, titulo, imagenes));
}else {
    await prodService.modificarProducto(new Producto(idGuardado,nom, precio, descripcion, titulo, imagenes)); 

}
cargarProductos();

document.getElementById("txtNombre").value = "";
document.getElementById("txtTitulo").value = "";
document.getElementById("txtDescripcion").value = "";
document.getElementById("txtPrecio").value =  "" ;
document.getElementById("txtImagenes").value = "";

const botonFormulario = document.getElementById("btnAgregar");
botonFormulario.innerText = "Agregar";
botonFormulario.dataset.id = "";


}
async function cargarProductos() {
        const productos = await prodService.obtenerProductos();
        const cuerpoTabla = document.getElementById("tabla-productos");
        cuerpoTabla.innerHTML = "";
        productos.forEach(prod => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.titulo}</td>
            <td>${prod.precio}</td>
            <td>${prod.descripcion}</td>
            <td>
                <button class="btn btn-warning btn-sm btn-editar" data-id="${prod.id}">✏️ Editar</button>
                <button class="btn btn-danger btn-sm btn-borrar" data-id="${prod.id}">🗑️ Borrar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila)
            
        }); 

        const btnBorrar = document.querySelectorAll(".btn-borrar");
        btnBorrar.forEach (boton =>{
            boton.addEventListener("click",async()=> {
                const idProducto = boton.dataset.id;
                await prodService.eliminarProducto(idProducto);
                cargarProductos();           
            });
        });

        const btnEditar = document.querySelectorAll(".btn-editar");
        btnEditar.forEach(boton =>{
            boton.addEventListener("click", async() =>{
                const idProducto = boton.dataset.id;
                const producto = await prodService.obtenerProducto(idProducto);
                document.getElementById("txtNombre").value = producto.nombre;
                document.getElementById("txtTitulo").value = producto.titulo;
                document.getElementById("txtDescripcion").value = producto.descripcion;
               document.getElementById("txtPrecio").value =  producto.precio ;
                 document.getElementById("txtImagenes").value = producto.imagenes;
                
                 const botonFormulario = document.getElementById("btnAgregar");
                 botonFormulario.innerText = "Guardar Cambios";
                 botonFormulario.dataset.id = idProducto;
                
            });
        });


        
        
        }

    



function inicializar(){
    document.getElementById("btnAgregar").addEventListener("click", altaProducto);
    cargarProductos();
    const btnBuscar = document.getElementById("btnBuscar");
        btnBuscar.addEventListener("click", async()=>{
            const idBuscado = document.getElementById("txtBuscarId").value;
            const producto = await prodService.obtenerProducto(idBuscado);
            if(producto == null){
                alert("El producto no existe");
            }else{
                console.log(producto);
            
            const cuerpoTabla = document.getElementById("tabla-productos");
        cuerpoTabla.innerHTML = "";
                const fila = document.createElement("tr");
                fila.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>${producto.descripcion}</td>
                <td>
                    <button class="btn btn-warning btn-sm btn-editar" data-id="${producto.id}">✏️ Editar</button>
                    <button class="btn btn-danger btn-sm btn-borrar" data-id="${producto.id}">🗑️ Borrar</button>
                </td>
            `;
            cuerpoTabla.appendChild(fila)

            
            const btnBorrar = document.querySelectorAll(".btn-borrar");
            btnBorrar.forEach (boton =>{
                boton.addEventListener("click",async()=> {
                    const idProducto = boton.dataset.id;
                    await prodService.eliminarProducto(idProducto);
                    cargarProductos();           
                });
            });
    
            const btnEditar = document.querySelectorAll(".btn-editar");
            btnEditar.forEach(boton =>{
                boton.addEventListener("click", async() =>{
                    const idProducto = boton.dataset.id;
                    const producto = await prodService.obtenerProducto(idProducto);
                    document.getElementById("txtNombre").value = producto.nombre;
                    document.getElementById("txtTitulo").value = producto.titulo;
                    document.getElementById("txtDescripcion").value = producto.descripcion;
                   document.getElementById("txtPrecio").value =  producto.precio ;
                     document.getElementById("txtImagenes").value = producto.imagenes;
                    
                     const botonFormulario = document.getElementById("btnAgregar");
                     botonFormulario.innerText = "Guardar Cambios";
                     botonFormulario.dataset.id = idProducto; 
                    
                });
            });}
        }); 

    }
    
            
        
            


window.onload = inicializar;
