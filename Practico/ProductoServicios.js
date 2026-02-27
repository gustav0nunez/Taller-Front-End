import Producto from "./Producto.js"


export default class ProductoSerivios {

async agregarProducto(producto) {   
    try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos', {
method: 'POST',
body: JSON.stringify(producto),
headers: {
'Content-Type': 'application/json'
}
});
const data = await response.json();
console.log(data);
} catch (error) {
console.error(error);
}

}

  async obtenerProductos() {
try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos');
const data = await response.json();
console.log(data);
return data;
} catch (error) {
console.error(error);
}
}

async obtenerProducto(id) {
try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos/${id}');
const data = await response.json();
console.log(data);
} catch (error) {
console.error(error);
}
}

async eliminarProducto(id) {
try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos/${id}', {
method: 'DELETE'
});
const data = await response.json(id);
console.log(data);
} catch (error) {
console.error(error);
}
}

async modificarProducto(producto) {
try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos/${producto.id}', {
method: 'PUT',
body: JSON.stringify(producto),
headers: {
'Content-Type': 'application/json'
}
});
const data = await response.json();
console.log(data);
} catch (error) {
console.error(error);
}
}
}





