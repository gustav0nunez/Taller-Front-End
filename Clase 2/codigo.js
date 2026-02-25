
// Traer los jugadores que tengas 7 o mas digitos. 


// Metodo para mostrar

const jugadores = ["Torreira", "Bentancur", "Vecino", "Valverde", "Batman"]; 

jugadores.forEach(jugador => {
    if (jugador.length >= 7){
        console.log(jugador)
    }
});


// Aplicando FIilter, metodo para obtener. Devuelve siempre un arreglo. 

let seleccion = jugadores.filter((jug) => jug.length >= 7);
console.log(seleccion); 

// Aplicando Find, recorre y retorna un solo elemento. 

let jugador = jugadores.find((jug)=> jug.charAt(0) == "B");
console.log(jugador);

// Aplicando Map.

let descriptivo = jugadores.map((jugador)=>`Jugador: ${jugador}`);

console.log(descriptivo);

