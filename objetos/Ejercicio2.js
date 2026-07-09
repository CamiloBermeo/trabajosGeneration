function Mascota(nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function(){
        console.log(`El animal con nombre: ${this.nombre} pertenece a la especie ${this.especie} cuenta con una edad de ${this.edad} años y un peso de ${this.peso}KG`)
    };
};
const mascota1 = new Mascota("Max", "Perro", 3, 15);
const mascota2 = new Mascota("Mia", "Gato", 2, 5);
const mascota3 = new Mascota("Toby", "Conejo", 1, 2);

mascota1.presentarse();
mascota2.presentarse();
mascota3.presentarse();

