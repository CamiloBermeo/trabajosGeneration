let menu = [
    {
        nombre: "Cazuela",
        precio: 18000,
        categoria: "Fuerte",
        disponible: false
    },
    {
        nombre: "Limonada Natural",
        precio: 7000,
        categoria: "Bebida",
        disponible: true
    },
    {
        nombre: "Cheesecake",
        precio: 9000,
        categoria: "Postre",
        disponible: false
    },
    {
        nombre: "Ensalada César",
        precio: 12000,
        categoria: "Entrada",
        disponible: true
    }
];
let prompt = require("prompt-sync")();


function mostrarMenu (menuConstruido){
    for(i = 0 ; i < menuConstruido.length; i++){
            console.log("Plato ", i+1 );
            console.log("Nombre: ", menuConstruido[i].nombre);
            console.log("Precio: ", menuConstruido[i].precio);
    }
}

function soloDisponibles(menuConstruido) {

    let platosDisponibles = []

    for(i = 0 ; i < menuConstruido.length; i++){
        if (menuConstruido[i].disponible == true){
            platosDisponibles.push(menuConstruido[i]);
        }
    }

    return platosDisponibles;
}

function tomarPedido(menuConstruido){
    let pedido = [];

    pedido.push(menuConstruido[0])
    pedido.push(menuConstruido[3])
    pedido.push(menuConstruido[2])

    let pedidoEliminado = pedido.pop()
    console.log("pedido eliminado", pedidoEliminado);

    return pedido;
}

let subTotal=0.0;
function calcularCuenta (pedidoTomado){

    for(i = 0; i < pedidoTomado.length ; i++){
        subTotal += pedidoTomado[i].precio;
    }

    let total = subTotal +( subTotal * 0.19);
    //console.log ("el total IVA incluido es de $", total )
    return total;
}

function pedidoTeclado (menuConstruido){

    let pedido = [];
    console.log("------------------------MENU------------------------------");
    
    menuConstruido.forEach((e, i )=> {
        console.log(`${i + 1}. ${e.nombre}`);
    });
    console.log("--------------------------------------------------------");
    
    let opcionPlato = parseInt(prompt("indica el numero de la opcion del menu:  "));

    if (opcionPlato == 1){
        pedido.push(menuConstruido[0])
    }else if (opcionPlato == 2){
        pedido.push(menuConstruido[1])
    }else if (opcionPlato == 3){
        pedido.push(menuConstruido[2])
    }else if (opcionPlato == 4){
        pedido.push(menuConstruido[3])
    }else {
        console.log("Opcion no valida");
    }

    total = calcularCuenta(pedido)
    console.log("El precio total es de:  $", total);
    
}
pedidoTeclado(menu);