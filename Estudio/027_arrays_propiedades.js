//Arrays propiedades, acceso y creación

// how to create an arrays 

// 1. new array() or array()
const fruits = Array('apple', 'banana', 'orange', 'patilla');
console.log(fruits);

const numbers = Array(1, 2, 3, 4, 5, 6);
console.log(numbers);

//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

//Accesing array elements

const firstFruit = fruits[0];
console.log(firstFruit);

//length property

const numberoffruits = fruits.length;
console.log(numberoffruits);

// Mutability

fruits.push('watermelon');
console.log(fruits);

// Inmutability

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits)
console.log(newFruits)

// checking arrays with array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercise: sum all elements of in array

const numbersArray = [1, 2, 3, 4, 5, 6]
let sum = 0

for (let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
    console.log(sum)
}
console.log(sum)