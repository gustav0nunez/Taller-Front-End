import ProductoService from "./ProductoServicios.js";
import Producto from "./Producto.js";

const prodService = new ProductoService();

function altaProducto(){
    let nom = document.getElementById("txtNombre").value; 
    let precio = document.getElementById("txtPrecio").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let titulo = document.getElementById("txtTitulo").value;
    let imagenes = document.getElementById("txtImagenes").value;
    prodService.agregarProducto(new Producto(null,nom, precio, descripcion, titulo, imagenes));
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
                <button class="btn btn-warning btn-sm data-id="${prod.id}">✏️ Editar</button>
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
        
    }



function inicializar(){
    document.getElementById("btnAgregar").addEventListener("click", altaProducto);
    cargarProductos();
}

window.onload = inicializar;
