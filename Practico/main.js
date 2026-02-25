
    async function obtenerProductos() {
try {
const response = await fetch('https://602ee9da4410730017c51705.mockapi.io/api/v1/productos');
const data = await response.json();
console.log(data);
return data;
} catch (error) {
console.error(error);
}
}
obtenerProductos();


async function agregarProducto() {
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

agregarProducto();