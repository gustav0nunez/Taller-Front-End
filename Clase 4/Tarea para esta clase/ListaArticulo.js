import Articulo from "./Articulo.js" 

export default class ListaArticulo {
    constructor(){
        this.articulos = [
            new Articulo(1, "Ropero", "Grande", 200, ""),
            new Articulo(2, "Lampara", "Luminosa", 123, ""),
            new Articulo(3, "Silla", "Comoda", 231, ""),
            new Articulo(4, "Cama", "Enorme", 78678, ""),
            new Articulo(5, "Mesa", "Amplia", 7876, ""),
        ];

    }
    
 generarHTML(){
    const element = document.getElementById("app");

    this.articulos.forEach(articulo => {
        element.innerHTML += `<div>
                <h2>${articulo.nombre}</h2>
                <p>${articulo.detalle}</p>
                <p>Precio: $${articulo.precio}</p>
                <img src="${articulo.imagen}" alt="${articulo.nombre}">
            </div>`;
    });
}


}