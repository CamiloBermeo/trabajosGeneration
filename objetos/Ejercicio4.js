function Libro(nombre, editorial, añoPublicado, escritor){
    let prestado = false;
    this.nombre = nombre;
    this.editorial = editorial;
    this.añoPublicado = añoPublicado;
    this.escritor = escritor;

    this.prestar = function(){
        if (prestado === false){
            prestado = true;
            console.log(`El libro ${this.nombre} ha sido prestado.`);
        } else {
            console.log("El libro ya está prestado");
        }
    };

    this.devolver = function(){
        if (prestado === true){
            prestado = false;
            console.log(`El libro ${this.nombre} ha sido devuelto.`);
        } else {
            console.log("No puedes devolver un libro que no está prestado");
        }
    };
}

let libro1 = new Libro("Don Quijote", "caracol", 1345, "Miguel de Cervantes");
libro1.prestar();
libro1.devolver();