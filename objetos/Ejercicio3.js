function Estudiante(nombre, curso, nota){
    let aprobado;
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.mostrarResultado = function(){
        if (nota >= 3.0){
            this.aprobado = true;
        }else {
            this.aprobado = false;
        }
        console.log(`El estudiante con nombre: ${this.nombre} pertenece al curso ${this.curso} cuenta con una nota de ${this.nota} y su estado es ${this.aprobado? "aprobó": "reprobó"}`);
    };
}

let estudiante1 = new Estudiante("Ana", "JavaScript", 4.5);
let estudiante2 = new Estudiante("Luis", "JavaScript", 2.8);
let estudiante3 = new Estudiante("Sofía", "JavaScript", 3.0);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();