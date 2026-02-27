import Producto from "./Producto.js"


export default class ProductoSerivios {

async agregarProducto() {
    const prodPrueba = {    
"nombre": "control remoto",
 "precio": 45,
 "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0IZ6XNrGCiBhcISFqa2dwUTa46nZfhLu1Q&s",
 "descripcion": "Para conejos",
 "numero": 2254,
 "titulo": "Zanahoria"};
    try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos', {
method: 'POST',
body: JSON.stringify(prodPrueba),
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
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos/:id');
const data = await response.json(id);
console.log(data);
} catch (error) {
console.error(error);
}
}

async eliminarProducto(id) {
try {
const response = await fetch('https://https://602ee9da4410730017c51705.mockapi.io/api/v1/productos/:id.com/api/data/123', {
method: 'DELETE'
});
const data = await response.json(id);
console.log(data);
} catch (error) {
console.error(error);
}
}

async modificarProducto(Producto) {
try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos/:id', {
method: 'PUT',
body: JSON.stringify({ name: 'Jane Doe', email: 'jane.doe@example.com' }),
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





