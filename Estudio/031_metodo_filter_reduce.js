// Methods that iterate over an array.
// Methods that DO NOT modify the original array (immutability)

// filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(number => number % 2 ===0)

console.log('Los numeros iniciales son: ', numbers)
console.log('los numeros pares son :', evenNumbers)

// reduce - caso 1

const numbereduce = [1, 2, 3, 4, 5]

const sum = numbereduce.reduce((acumulator, currenvalue) => acumulator + currenvalue, 0)

console.log(numbereduce)
console.log(sum)

// reduce() case 2

const word = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordfrecuency = word.reduce((acumulator, currentValue) =>{
    if (acumulator[currentValue]) {
        (acumulator[currentValue])++
    }else {
        (acumulator[currentValue]) = 1   
    }
    return acumulator
},{})

console.log(wordfrecuency)