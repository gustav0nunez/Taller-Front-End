const ventas = [{Numero: 1, Fecha: "12/12/2025", Documento: 54875283, monto: 5464},
    {Numero: 2, Fecha: "6/12/2025", Documento: 54535233, monto: 658},
    {Numero: 3, Fecha: "9/12/2025", Documento: 54353283, monto: 23145},
    {Numero: 4, Fecha: "23/12/2025", Documento: 54876783, monto: 978},
];

//Ejercicio 1
function buscarVentaPorNumero(numero){

    let ventaAEncontrar = ventas.find((ven) => ven.Numero == numero);
    return ventaAEncontrar;
}

//Ejercicio 2
function retornarVentasDeClientes (documento) {
    let clienteAEncontrar = ventas.filter((ven) => ven.Documento == documento); 
    return clienteAEncontrar;
}

//Ejercicio 3

function retornarVentasConNumeroYMonto(){
    let ventasAEncontrar = ventas.map((ven)=> `${ven.Numero}, ${ven.monto}`);
    return ventasAEncontrar;
}

//Ejercicio 4

function buscarVentasSuperiorAMontoIngresado(valor) {
   let ventasMayores = ventas.filter((ven) => ven.monto > valor);
   return ventasMayores.map((ven)=> `${ven.Fecha}, ${ven.monto}`)
}








