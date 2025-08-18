// spread operator in javaScrip

// 1. copia de un array
const originalArray = [1, 2, 3, 4, 5]
const copyArray = [...originalArray]
console.log(originalArray)
console.log(copyArray)

// 2.  Combinar arrays 
const numeros1 = [1, 2, 3, 4, 5]
const numeros2 = [6, 7, 8, 9, 10]
const combinacioNumeros = [...numeros1, ...numeros2]
console.log(numeros1)
console.log(numeros2)
console.log(combinacioNumeros)

//crear arrays con elementos adicionales

const baseAray = [1, 2, 3, 4, 5]
const arrayWithelement = [...baseAray, 2, 3, 4, 5]

console.log(baseAray)
console.log(arrayWithelement)

// pasar elementos a un funcion

function sum(a, b, c) {
    return a + b + c 
}
const elementos = [1,2,3]
const elemenArray = sum(...elementos)


console.log(elemenArray)
