// slice()
//array.slice(inicio, fin)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// 1. slice(2) → desde índice 2 hasta el final
console.log(animals.slice(2));
// ["camel", "duck", "elephant"]

// 2. slice(2, 4) → desde índice 2 hasta índice 4 (sin incluir el 4)
console.log(animals.slice(2, 4));
// ["camel", "duck"]

// 3. slice(1, 5) → desde índice 1 hasta el 5 (sin incluirlo)
console.log(animals.slice(1, 5));
// ["bison", "camel", "duck", "elephant"]

// 4. slice(-2) → cuenta desde el final, coge los últimos 2
console.log(animals.slice(-2));
// ["duck", "elephant"]

// 5. slice(2, -1) → desde índice 2 hasta el PENÚLTIMO
console.log(animals.slice(2, -1));
// ["camel", "duck"]

// 6. slice() → sin argumentos, devuelve una copia del array
console.log(animals.slice());
// ["ant", "bison", "camel", "duck", "elephant"]

