class Producto{
    constructor(nombre, precio,categoria, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = 0;
    }
        hayStock(cantidad){
            if (cantidad > stock){
                return false;
            }else{
                return true;
            }
        }
        ficha(){
            return `- Nombre del producto: ${this.nombre} - Precio ${this.precio} - Categoria ${this.categoria} - Stock ${this.stock}`
        }
    
}
export default Producto;