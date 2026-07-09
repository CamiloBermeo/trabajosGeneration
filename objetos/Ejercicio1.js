function Computador(marca, procesador, ram, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;

};

let computador1 =  new Computador("hp","intel","32GB", 3000000)
let computador2 =  new Computador("LENOVO","amd","32GB", 4000000)
let computador3 =  new Computador("appel","mac09","32GB", 5000000)

console.log(computador1);
console.log(computador2);
console.log(computador3);
