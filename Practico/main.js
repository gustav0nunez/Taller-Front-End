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
    try {
        const productos = await prodService.obtenerProductos();
        for(let elem of productos) {
            console.log(elem);
        }
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

function inicializar(){
    document.getElementById("btnAgregar").addEventListener("click", altaProducto);
    cargarProductos();
}

window.onload = inicializar;
