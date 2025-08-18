//Calcular el precio de un artuculo


function calculateDiscountedPrice(precio, descuento){
    const descuentoprenda = (precio*descuento)/100;
    const preciofinal = precio - descuentoprenda;

    return preciofinal
}

const valororiginal = 100;
const valordescuento = 20;
const valor = calculateDiscountedPrice(valororiginal, valordescuento)

console.log(`El precio de la prenda es ${valororiginal}`);
console.log(`El valor del descuento es ${valororiginal}%`);
console.log(`El valor final de la prenda con descuento es ${valor}`)




