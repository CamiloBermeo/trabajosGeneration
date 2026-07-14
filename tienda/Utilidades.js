function formatearPrecio(precio){
    return precio.toLocaleString("es-CO");
}

function esEmailValido(email){
    if (email.contain("@") && email.contain(".")){
        return true;
    }else {
        return false;
    }
}

function calcularDescuento(precio,porcentaje){
    return precio - porcentaje;
}

let utilidades = {
    precio : formatearPrecio(),
    emailValido : esEmailValido(),
    descuento : calcularDescuento()
}
export default utilidades;