class UsuarioNequi{
    constructor( nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    enviar(monto){
        if(monto > this.saldo){
            return console.log("Saldo insuficiente");
        }
        let totalSaldo = monto - this.saldo;
        return console.log(`${this.nombre} tu saldo restante es de ${totalSaldo}`);
    }
}

class ComercioNequi{
    constructor(){
        
    }
}