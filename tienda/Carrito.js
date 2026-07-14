import { formatearPrecio, calcularDescuento } from "utilidades";
import Producto from "./Producto";

class Carrito{
    constructor(usuario){
        this.usuario = usuario;
        this.items = items = [];
    }

    agregar(producto, cantidad){
        if(Producto.hayStock() == true){
            let productoFinal = {
                producto : producto,
                cantidad : cantidad
            }
            this.items.push(productoFinal);
            return "Producto Guardado"
        }else{
            return "sin stock"
        }
    }

    subtotal(){
        
    }
}