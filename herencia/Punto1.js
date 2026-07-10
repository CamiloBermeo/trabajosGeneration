class Restaurante{
    constructor(nombre, categoria){
        this.nombre= nombre;
        this.categoria= categoria;
        this.calificacion = 4.3;
    };

    describir(){
        console.log(`${this.nombre} -- ${this.categoria} (${this.calificacion} ⭐)` );
    }

    estaBienCaificado(){
        this.calificacion >= 4.5 ? console.log(true) : console.log(false);
    }
}

let res1 = new Restaurante("El Corral", "Hamburguesas");

res1.describir();
res1.estaBienCaificado()