const prompt = require("prompt-sync")();

function Vehiculo(marca, color, cilindraje, tipo, año){
    this.marca = marca;
    this.color = color;
    this.cilindraje = cilindraje;
    this.tipo = tipo;
    this.año = año;
    this.velocidad = 0;
    this.encendido = false;
    this.marcha = 0;

    this.encender = function(){
            this.encendido = true;
                console.log(`El vehiculo ${this.marca} de color ${this.color}, cilindraje${this.clindraje}, tipo ${this.tipo} y del año ${this.año} esta encendido.`);

    };

    this.acelerar = function(){
        if (this.encendido === true){
            this.velocidad += 20;
            console.log(`El vehiculo ${this.marca} de color ${this.color}, cilindraje${this.clindraje}, tipo ${this.tipo} y del año ${this.año} tiene una velocidad de ${this.velocidad}KM/h.`);
        } else {
            console.log("No puedes acelerar con el vehiculo apagado");
        }
    };
    
    this.cambiarMarcha = function(){
        if (this.encendido === true && this.velocidad >= 20){
            this.marcha ++;
            console.log(`El vehiculo ${this.marca} de color ${this.color}, cilindraje${this.clindraje}, tipo ${this.tipo} y del año ${this.año} esta en la marcha # ${this.marcha}.`);
        } else {
            console.log("El vehiculo esta apagado");
        }
    };
    
}

let marca = prompt("Escribe la marca del vehiculo ");
let color = prompt("Escribe el color del vehiculo ");
let cilindraje = prompt("Escribe el cilindraje del vehiculo "); 
let tipo = prompt("Escribe el tipo de vehiculo ");
let año = prompt("Escribe el año del vehiculo ");

let vehiculo1 = new Vehiculo(marca, color, cilindraje, tipo, año);

vehiculo1.encender();
vehiculo1.acelerar();
vehiculo1.cambiarMarcha();
vehiculo1.acelerar();
vehiculo1.cambiarMarcha();
vehiculo1.acelerar();
vehiculo1.cambiarMarcha();
vehiculo1.acelerar();
vehiculo1.cambiarMarcha();