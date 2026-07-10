class Pelicula{
    constructor(titulo, duracion){
        this.titulo = titulo;
        this.duracion = duracion;
        this.precioBase = 15000;
    }

    precioBoleta(){
        return this.precioBase;
    }
    ficha(){
        console.log(` la pelicula ${this.titulo}, tiene una duracion de ${this.duracion}, con un precio de ${this.precioBoleta()}`);
    }

}

class PeliculaVIP extends Pelicula{
    constructor(titulo, duracion, incluyeComida = false){
        super(titulo, duracion);
        this.incluyeComida = incluyeComida;
    }
    precioBoleta(){
        let adicional = 25000;
        if (this.incluyeComida){
            adicional += 18000;
        }
        return this.precioBase + adicional;
    }
}

let peliNormal = new Pelicula("Titanic", 120);
let peliVip = new PeliculaVIP("InterEstelar", 126, true);

peliNormal.ficha();
peliVip.ficha();

