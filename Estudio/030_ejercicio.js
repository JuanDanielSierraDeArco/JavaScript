// Exercise: Fahrenheit to Celsius conversion

// Array con diferentes valores en grados Fahrenheit
const gradosFahrenheit = [32, 45, 50, 59, 68, 72, 77, 86, 95, 104, 212];

// Usamos map() para convertir cada valor a Celsius
const gradosCelsius = gradosFahrenheit.map(f => (5/9) * (f - 32));

console.log('Grados en Fahrenheit:', gradosFahrenheit);
console.log('Grados en Celsius:', gradosCelsius);

// Exercise: sum of Elements in an array

// Creamos un array de números
const newNumber = [1, 2, 3, 4, 5];

// Inicializamos una variable acumuladora en 0
let sum = 0;

// Usamos forEach() para recorrer cada número del array
newNumber.forEach(number => {
    sum += number; // sum = sum + number
});

// Mostramos el array original
console.log('Array of Numbers:', newNumber);

// Mostramos el resultado de la suma
console.log('Sum of Numbers:', sum);