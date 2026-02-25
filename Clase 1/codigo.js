

function saludarNombre1(nombre){
    console.log("Hola " + nombre);
}

saludarNombre1("Gustavo");

const saludarNombre2 = nombre => console.log("Hola " + nombre);

saludarNombre2("Juancito"); 

const saludarNombreApellido1= (nombre, apellido) => console.log("Hola " + nombre + " " + apellido);

saludarNombreApellido1("Gustavo", "Nuñez")

const duplicar = num => num * 2; 

console.log(duplicar(2));

const saludoIdioma = (nombre, idioma) => {
    let mensaje = nombre; 

    if (idioma == "Es"){
        mensjae = "Hola "
    }else {
        mensaje = "Hello "
    }
    mensaje += nombre; 
    console.log(mensaje);
}

saludoIdioma("Gustavo", "Es")