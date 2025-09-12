// Las constantes por convención se escriben en MAYÚSCULAS.
const COSTO_BASE_M2 = 1.16;

// La función constructora Number() castea/convierte el valor del prompt a tipo número.
// Si la conversión falla, retorna NaN
let totalm2 = Number(prompt("Ingrese los metros cuadrados de la propiedad:"));

//Las variables declaradas en el ambito global son accesibles desde cualquier parte del código tanto bloque o funcion. 
let fm = 1.07;

// isNaN() verifica si el valor NO es un número (Not a Number), devuelve true si NO es un número o false si es un número
if (!isNaN(totalm2 && totalm2 > 0)) {
    // toFixed(2) formatea el número a 2 decimales.
    alert("El costo total de la propiedad es: $" + (COSTO_BASE_M2*totalm2*fm).toFixed(2));
} else {
    console.log("El valor ingresado no es un número");
    alert("Por favor ingrese un número válido mayor a 0");
}

//Las variables let/const tienen ambito de bloque, es decir solo son accesibles dentro del bloque donde fueron declaradas.
//Las variables var tienen ambito de función, es decir son accesibles dentro de la función donde fueron declaradas.



                                                                                                                                                                                           